import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>✅ Payment Successful!</h1>
        <p>Thank you, <b>{formData?.name || "Customer"}</b> 🌸</p>
        <p>Your order will be delivered to:</p>
        <p>{formData?.address}</p>
        <button className="home-btn" onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;