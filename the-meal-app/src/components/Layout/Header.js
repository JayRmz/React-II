import React from "react";

import classes from "./Header.module.css";
import Background from "../../assets/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const { onShowCart } = props;
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={Background} alt="Background" />
      </div>
    </>
  );
};

export default Header;
