import React from "react";

import classes from "./Header.module.css";
import Background from "../../assets/meals.jpeg";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={Background} alt="Background" />
      </div>
    </>
  );
};

export default Header;
