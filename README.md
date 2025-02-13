# 🌟 InventoHub - Inventory Management System

![Banner Screenshot](https://res.cloudinary.com/dgxvtrpmh/image/upload/v1739466603/Screenshot_424_ddhcaq.png)

## 📝 **Table of Contents**

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Installation and Setup](#-installation-and-setup)
- [Usage](#-usage)
- [Contact](#-contact)

---

## 📖 About the Project

InventoHub is an innovative Inventory Management System designed to streamline product management, sales tracking, and subscription services. The platform provides a seamless experience for users to manage shops, track sales, and handle invoices with ease. It offers role-based permissions, enabling System Admins, Shop Managers, and users to interact with the system according to their specific responsibilities. With intuitive features like dynamic product management, real-time sales data, subscription management, and email notifications, InventoHub aims to provide a comprehensive solution for businesses to efficiently manage their inventory and customer relations.

---

## 🚀 Live Demo

🔗 [Click here to view the live application](https://inventory-management-sys-67be7.web.app/)

---

## ✨ Features

### 🔑 **1. User Roles & Permissions**

### 🛠️ **System Admin**

- **Full control over shops, products, and notices.**
  - 🏪 **Manage all shops:** View, edit, and assign roles.
  - 📦 **Manage products:** Add, update, and delete any product.
  - 📢 **Manage notices:** Create, update, and delete system-wide announcements.

### 🏬 **Shop Manager**

- **Manages operations within their shop.**
  - 🛒 **Manage products:** Add, update, and delete products.
  - 📊 **Manage sales:** Track sales data, order history, and revenue.
  - 💳 **Manage subscriptions:** Handle discount plans and recurring billing.

### 👤 **Logged-in User**

- **Can create and manage their own shop.**
  - 🏗️ **Create a shop:** Set up and customize shop details.
  - ⚙️ **Manage shop:** Oversee products and sales within their own shop.

---

## 📦 **2. Product Management**

- ➕ **Add Products:** Input product details (name, description, price, stock, images) and store them in the database.
- ✏️ **Update Products:** Modify existing product information, such as price and images.
- ❌ **Delete Products:** Remove discontinued or unwanted products from the shop listings.

---

## 💰 **3. Sales & Subscription**

- 📈 **View Sales:** Access real-time sales data, including revenue and customer purchases.
- 🔄 **Manage Subscriptions:** Offer and oversee subscription-based services, discounts, and renewals.
- 🧾 **Generate Invoices:** Create detailed invoices for transactions and send them to customers.

---

## 📧 **4. Email Notifications**

- 📢 **Notices:** Admins send critical updates, promotions, and system maintenance alerts.
- 🎯 **Promotional Emails:** Shop Managers create and send marketing campaigns.
- ✉️ **EmailJS Integration:** Enables seamless email delivery without requiring a backend email server.

---

## 📦 Technologies Used

| Technology              | Purpose                                                      | Version Required |
| ----------------------- | ------------------------------------------------------------ | ---------------- |
| React                   | JavaScript library for building user interfaces.             | v18.2.0          |
| React Router            | Declarative routing for React applications.                  | v6.4.0           |
| DaisyUI                 | Component library built on Tailwind CSS for easy UI styling. | v3.0.0           |
| Tailwind CSS            | Utility-first CSS framework for custom designs.              | v3.2.0           |
| Axios                   | Promise-based HTTP client for making requests.               | v1.0.0           |
| TanStack Query          | Powerful data-fetching and state management for React.       | v4.0.0           |
| AOS (Animate On Scroll) | Library for animating elements on scroll.                    | v2.3.1           |
| Firebase                | authentication and hosting.                                  | v10.0.0          |

---

## 💻 Screenshots

![Dashboard Screenshot](https://res.cloudinary.com/dgxvtrpmh/image/upload/v1739464468/Screenshot_420_hmtek3.png)
![Dashboard Screenshot](https://res.cloudinary.com/dgxvtrpmh/image/upload/v1739464468/Screenshot_421_zvd5uf.png)
![Dashboard Screenshot](https://res.cloudinary.com/dgxvtrpmh/image/upload/v1739464468/Screenshot_422_fhtkx7.png)
![Dashboard Screenshot](https://res.cloudinary.com/dgxvtrpmh/image/upload/v1739464468/Screenshot_423_dubrlp.png)

---

## 📂 Project Structure

```
InventoHub-client/
├── public/
├── src/
│   ├── assets/
│   ├── api/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── firebase/
│   ├── lib/
│   ├── hooks/
│   ├── providers/
│   ├── routes/
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
```

---

## 🔧 Installation and Setup

### **Prerequisites**

Ensure you have the following installed:

- **npm** (Node Package Manager)

---

```bash
https://github.com/Arnab-Gupta11/InventoHub-client.git
cd InventoHub-client
```

### **Install Dependencies**

```bash
npm install
```

### **Setup Environment Variables**

Create a `.env` file in the project root and configure the following variables:

```env
#imageBB
VITE_IMGBB_API_SECRET=<your_imagebb_api_secret>

#Stripe payment
VITE_PAYMENT_GATEWAY_PK=<your_stripe_payment_gateway_pk>
```

---

## 🧑‍💻 Usage

### **Run the Project**

For development:

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173/
```

---

## 📬 Contact

📧 Email: [arnab.gupta.011@gmail.com](mailto:arnab.gupta.011@gmail.com)
🌐 Portfolio: [arnab-gupta](https://arnab-gupta.netlify.app/)
