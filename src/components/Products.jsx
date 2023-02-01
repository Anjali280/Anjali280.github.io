import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (t, value) => {
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;
    if (t === "f") {
      url = url + `?filter=${value}`;
    } else if (t === "s") {
      url = url + `?sort=price&order=${value}`;
    }
    const res = await fetch(url);
    const resObj = await res.json();

    setProducts(resObj.data);
  };
  return (
    <div>
      <Navbar />

      <div>
        <div>
          <select
            onChange={(event) => {
              const type = event.target.value;
              fetchData("f", type);
            }}
          >
            <option value="kids">kids</option>
            <option value="women">women</option>
            <option value="men">men</option>
            <option value="homedecor">homedecor</option>
          </select>

          <select
            onChange={(event) => {
              const sort = event.target.value;
              fetchData("s", sort);
            }}
          >
            <option value="asc">asceding</option>
            <option value="desc">descending</option>
          </select>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          }}
        >
          {products.map((elem, index) => {
            return <ProductCard key={index} product={elem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
