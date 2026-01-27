import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>✅ Payment Successful!</h1>
        <p>Thank you for shopping with <b>SkyBloom</b> 🌸</p>
        <p>Your order has been placed successfully.</p>
        <button className="home-btn" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
