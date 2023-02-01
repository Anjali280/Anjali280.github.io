import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { productsData } = useSelector(async (store) => {
    console.log(await store);
    return await store.products;
  });
  console.log(productsData);
  useEffect(() => {
    const productObj = productsData.filter((elem) => elem.id === Number(id));
    setProduct(...productObj[0]);
  }, []);

  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h4>{product.price}</h4>
      <p>{product.brand}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductDetails;
