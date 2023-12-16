import classes from "./meals-item.module.css";
import Image from "next/image";
import Link from "next/link";
export default function MealItem({ title, image, summary, slug, creator }) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
      </div>
      <div className={classes.actions}>
        <Link href={"/meals/${slug}"}></Link>
      </div>
    </article>
  );
}
