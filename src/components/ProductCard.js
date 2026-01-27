import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useContext(CartContext);

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <div className="wishlist-icon">
        <button
          onClick={() =>
            isInWishlist
              ? removeFromWishlist(product.id)
              : addToWishlist(product)
          }
          className={isInWishlist ? "heart filled" : "heart"}
        >
          ♥
        </button>
      </div>
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button className="add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
