import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    // simulate payment success
    setTimeout(() => {
      navigate("/payment-success", { state: { formData, cartItems } });
    }, 1000);
  };

  const total =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + item.price, 0)
      : 0;

  return (
    <div className="checkout-page">
      <h2 className="section-title">Checkout Details 🧾</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Full Name<span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
        />

        <label>
          Phone Number<span className="required">*</span>
        </label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />

        <label>
          Address<span className="required">*</span>
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter full delivery address"
          rows="3"
        ></textarea>

        <div className="checkout-summary">
          <p>Total Amount: ₹{total}</p>
        </div>

        <button className="confirm-btn" type="submit">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
};

export default Checkout;