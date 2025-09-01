import React from "react";
import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
    {
        id : 'm1',
        name : 'Sushi',
        descriptin : 'Finest fish and veggies',
        price : 22.99,
    },
    {
        id : 'm2',
        name : 'Greean Bowl',
        descriptin : 'A Bowl full of green vagetables and rice...',
        price : 12.50,
    },
    {
        id : 'm3',
        name : 'Barbeque Burger',
        description: 'Raw...and Meaty!',
        price: 13.99
    },
    {
        id: 'm4',
        name: 'Pasta',
        description: 'An Italian delicacy!',
        price: 15.60
    },
];
const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) =>(
        <MealItem 
        key={meal.id}
        name={meal.name}
        description={meal.descriptin}
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