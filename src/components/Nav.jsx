import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
function Nav() {
  return (
    <nav>
      <button className={styles.btn}>+</button>
      <ul className={styles.nav}>
        <li>
          <NavLink className={styles.li} to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.li} to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink className={(styles.li, styles.active)} to="/login">
            Log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
