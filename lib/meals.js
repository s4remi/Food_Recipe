import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  // this is not a normal practice to do. I am using it
  // for purpose of the this video foe using next.js
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
