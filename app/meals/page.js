import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/component/meals/meals-grid.js";
import { getMeals } from "@/lib/meals";

export default async function MealPage() {
  const meals = await getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>Meals Page</h1>
        <span className={classes.highlight}>BY you </span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam</p>
        <p>chode you favorite food recipe and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
