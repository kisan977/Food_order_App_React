import classes from "./AvialableMeals.module.css";
import Card from "../ui/Card";
import MealItem from "./mealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Momo",
    description: "Finest fish and veggies",
    price: 60,
  },
  {
    id: "m2",
    name: "Chowmin",
    description: "A german specialty!",
    price: 30,
  },
  {
    id: "m3",
    name: "Parautha",
    description: "American, raw, meaty",
    price: 25,
  },
  {
    id: "m4",
    name: "Chicken Momo",
    description: "Healthy...and green...",
    price: 120,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
