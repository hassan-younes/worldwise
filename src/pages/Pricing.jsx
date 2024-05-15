// Uses the same styles as Product
import styles from "./Pricing.module.css";
import img2 from "../components/img-2.jpg";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div className={styles.text}>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <div className={styles.div}>
          <img
            src={img2}
            className={styles.img}
            alt="overview of a large city with skyscrapers"
          />
        </div>
      </section>
    </main>
  );
}
