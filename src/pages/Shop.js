import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import API_BASE_URL from "../config";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, addToWishlist } = useContext(CartContext);

  useEffect(() => {
    

fetch(`${API_BASE_URL}products/`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data); // Debug check
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="shop-page">
      <h2 className="section-title">🌿 Our Organic Collection</h2>
      {products.length === 0 ? (
        <p className="empty-text">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <div className="product-buttons">
                <button
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  🛒 Add to Cart
                </button>
                <button
                  className="wishlist-btn"
                  onClick={() => addToWishlist(product)}
                >
                  💖 Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
