import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="product-details">
      <h2>Product Details - ID: {id}</h2>
      <p>Coming soon...</p>
    </div>
  );
};

export default ProductDetails;
