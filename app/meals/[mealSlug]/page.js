import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  console.log(meal);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}

// Task: create a dynamic route: /meals/<some slug>
// localhost:3000/meals/something
