import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import { MdAddShoppingCart } from "react-icons/md";

export default props => {
  console.log(props)
  const { image, product_name, description, price } = props.product;
  return (
    <div className="card mb-3">
      <img src={image} alt="product" />
      <div className="p-3">
        <b>{product_name} </b>
        <p>Price: € {price}</p>
        <Link to={`/products/${props.product.id}`}>
          <button className="btn btn-outline-success" value={"hello"}>
            View Details
          </button>
        </Link>
        <button
          className="btn btn-outline-secondary"
          onClick={(event)=>props.handleClick(event)}
        >
        <MdAddShoppingCart/>
        </button>
      </div>
    </div>
  );
};
