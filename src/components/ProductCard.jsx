import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  const { id, title, image, price, brand, category } = props.product;

  return (
    <div
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <h4>{price}</h4>
      <p>{brand}</p>
      <p>{category}</p>
    </div>
  );
}

export default ProductCard;
