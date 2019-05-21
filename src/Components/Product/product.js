import React from "react";


export default props => {
  const {
    image,
    product_name,
    description,
    price,
    prices_by,
    // quantity,
    ingredients,
    allergens,
    // in_stock,
    // shopId
  } = props.product;

  return (
    <div>
      <img src={image} alt="product" />
      <div className="container mt-5 mb-5">
        <h2>{product_name} </h2>
        <p>{description} </p>
        <p>Price: € {price} by {prices_by}</p>
        {/* <p>Price by: {prices_by}</p> */}
        {/* <p>Quantity: {quantity} </p> */}
        <p>Ingriedients: {ingredients} </p>
        <p>Allergens: {allergens} </p>
        <div>Select quantity: <input type="number" name="quantity" min="1" max="1000"/></div>
        {/* <p>Shop: {shopId}</p> */}
      </div>
    </div>
  );
};
