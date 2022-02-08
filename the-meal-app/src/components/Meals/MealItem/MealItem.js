import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealitemForm";

const MealItem = (props) => {
  const { name, description, price } = props;

  const mealPrice = `$ ${price.toFixed(2)} USD`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{mealPrice}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
