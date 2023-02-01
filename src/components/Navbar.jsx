import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
        backgroundColor: "teal",
        fontWeight: "bolder",
        color: "black",
        fontSize: "30px",
      }}
    >
      <div
        style={{
          marginRight: "10px",
        }}
      >
        <Link to="/cart">Cart</Link>
      </div>
      <div>
        <Link to="/orders">Orders</Link>
      </div>
    </div>
  );
}

export default Navbar;
