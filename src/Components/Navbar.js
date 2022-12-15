import React from "react";
const Navbar = (props) => {
  return (
    <div className="nav-container">
      <div id="nav" style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cardIcon}
            src="https://image.flaticon.com/icons/png/512/1170/1170678.png"
            alt="cart-icon"
          ></img>
          <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  cardIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 60,
    width: 500,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
