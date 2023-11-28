/* eslint-disable no-unused-vars */

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const result = useLoaderData();
  return (
    <div>
      <div className="text-center">Payment</div>
      <div className="max-w-lg mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm result={result}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
