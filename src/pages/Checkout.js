import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleDummyPayment = () => {
    alert(`Simulating payment of ₹${total}...`);
    clearCart(); // Empty cart after payment
    navigate("/payment-success"); // Redirect to success page
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total Amount: ₹{total}</p>
      <button
        className="pay-btn"
        onClick={handleDummyPayment}
      >
        Pay Now (Demo)
      </button>
    </div>
  );
};

export default Checkout;
