import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id} className={classes.item}>
            <MealItem {...meal} />
          </li>
        ))}
      </ul>
    </>
  );
}
