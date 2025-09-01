import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies...",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Green Bowl",
    description: "A Bowl full of green vegetables and rice...",
    price: 12.5,
  },
  {
    id: "m3",
    name: "Barbeque Burger",
    description: "Raw...and Meaty!",
    price: 13.99,
  },
  {
    id: "m4",
    name: "Pasta",
    description: "An Italian delicacy!",
    price: 15.6,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <Card className={classes.meals}>
      <ul>{mealList}</ul>
    </Card>
  );
};

export default AvailableMeals;
