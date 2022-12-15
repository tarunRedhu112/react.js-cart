import React from "react";

const CartItem = (props) => {
  // console.log("this.props", this.props);
  const { price, title, qty, img } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src={img} style={style.image} alt=""></img>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs. {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-action">
          {/* Buttons */}
          <img
            alt="increase"
            className="action-icon"
            src="https://image.flaticon.com/icons/png/512/992/992651.png"
            onClick={() => onIncreaseQuantity(product)}
          ></img>
          <img
            alt="decrease"
            className="action-icon"
            src="https://image.flaticon.com/icons/png/512/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
          ></img>
          <img
            alt="delete"
            className="action-icon"
            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
            onClick={() => onDeleteProduct(product.id)}
          ></img>
        </div>
      </div>
    </div>
  );
};

const style = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
