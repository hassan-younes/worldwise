import styles from "./PageNav.module.css";
import Logo from "./Logo";
import Nav from "./Nav.jsx";
function PageNav() {
  return (
    <div className={styles.pageNav}>
      <Logo />
      <Nav />
    </div>
  );
}

export default PageNav;
