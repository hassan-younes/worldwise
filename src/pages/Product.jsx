import styles from "./Product.module.css";
import PageNav from "../components/PageNav";
import img1 from "../components/img-1.jpg";
export default function Product() {
  return (
    <>
      <main className={styles.product}>
        <PageNav />
        <section>
          <div className={styles.div}>
            <img
              src={img1}
              alt="person with dog overlooking mountain with sunset"
              className={styles.img}
            />
          </div>
          <div>
            <h2>About WorldWide.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at
              fuga perspiciatis?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
