import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";

import { Link } from "react-router-dom";
function HomePage() {
  return (
    <main className={styles.home}>
      <PageNav />
      <section className={styles.section}>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to={"./app"}>
          <button className={styles.primary}>start tracking now</button>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
