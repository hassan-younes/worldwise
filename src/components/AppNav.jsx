import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <NavLink to={"/app/cities"}>cities</NavLink>
        <NavLink to={"/app/countries"}>countries</NavLink>
      </ul>
    </div>
  );
}

export default AppNav;
