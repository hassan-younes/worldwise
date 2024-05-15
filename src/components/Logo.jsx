import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
function Logo() {
  return (
    <div>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}

export default Logo;
