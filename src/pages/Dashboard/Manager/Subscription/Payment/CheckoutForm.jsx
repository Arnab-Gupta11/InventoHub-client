import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import useAuth from "../../../../../hooks/useAuth";
import PropTypes from "prop-types";
import useSingleShop from "../../../../../hooks/useSingleShop";
const CheckoutForm = ({ result }) => {
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const navigate = useNavigate();
  //state
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const { price: totalPrice, limit: range } = result;

  //single shop
  const { shop } = useSingleShop();
  const { productLimit } = shop;

  //get Admin
  const [myData, setMyData] = useState({});

  // using Promises
  useEffect(() => {
    axiosSecure.get("/users/admin").then((response) => setMyData(response.data));
  }, [axiosSecure]);
  const { income } = myData;

  useEffect(() => {
    axiosSecure.post("/api/create-payment-intent", { price: totalPrice }).then((res) => {
      console.log(res.data.clientSecreat);
      setClientSecret(res.data.clientSecreat);
    });
  }, [axiosSecure, totalPrice]);

  //handle Form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      //   console.log(`error methode`, error);
      setError(error);
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user.displayName || "anonymous",
        },
      },
    });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);

      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
      }
    }

    // now save the payment in the database
    const limit = {
      productLimit: productLimit + range,
    };
    const newIncome = {
      income: income + totalPrice,
    };
    // console.log(limit);
    const res = await axiosSecure.patch(`/shops/${user.email}`, limit);
    await axiosSecure.patch(`/users/admin`, newIncome);

    if (res.data?.modifiedCount) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Successfull!! Your shop product limit increases.",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/subscription");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {/*  */}
        <button className="mt-5 btn btn-sm btn-primary" type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        {error && <p className="text-sm text-red-700">{error.message}</p>}
        {transactionId && <p className="text-green-600 text-sm">Your transaction id : {transactionId}</p>}
      </form>
    </div>
  );
};
CheckoutForm.propTypes = {
  result: PropTypes.object,
};
export default CheckoutForm;
