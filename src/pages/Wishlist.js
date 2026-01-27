import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist } = useContext(CartContext);

  return (
    <div className="wishlist-page">
      <h2 className="section-title">💖 Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-text">Your wishlist is empty. Add some products you love!</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <div className="wishlist-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="wishlist-img"
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="wishlist-buttons">
                <button
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="remove-btn"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
