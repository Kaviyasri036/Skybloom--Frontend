import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h1 className="logo">🌸 SkyBloom</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li>
          <Link to="/cart">
            🛒 Cart ({cartItems.length}) {/* ✅ shows total items count */}
          </Link>
        </li>
        <li>
  <Link to="/wishlist">💖 Wishlist</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
