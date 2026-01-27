import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useContext(CartContext); // Access from context safely
  const navigate = useNavigate(); // ✅ used for redirect

  const total =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((acc, item) => acc + item.price, 0)
      : 0;

  const handleCheckout = () => {
    // 🟢 Simulate a short delay for fake payment processing
    setTimeout(() => {
      navigate("/payment-success");
    }, 1000);
  };

  return (
    <div className="cart-page">
      <h2 className="section-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-text">Your cart is empty. Start shopping!</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-info">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
