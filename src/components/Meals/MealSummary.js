import React from "react";
import classes from './MealSummary.module.css'

const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Deliciousm Food Delivered, at your ease!</h2>
      <p>
        Welcome to ReactMeals, your go-to destination for fresh,
        delicious meals delivered right to your door. Whether you're craving a
        hearty dinner, a light lunch, or a quick snack, we've got something for
        every taste and lifestyle. Our chefs use only the finest ingredients to
        craft meals that are flavorful, nutritious, and made with care.
      </p>
      <p>
      With a
        menu that changes weekly, you’ll always find something new to love.
        Ordering is simple, delivery is fast, and satisfaction is guaranteed.
        Skip the prep and enjoy more time doing what you love—let us take care
        of dinner tonight!
      </p>
    </section>
  );
};

export default MealSummary;
