import { Fragment } from "react";
import MealsSummery from "../meals/MealsSummery";
import AvailableMeals from "./AvialableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummery />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
