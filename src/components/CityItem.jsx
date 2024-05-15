import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesConext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { cityName, position, id, date, emoji } = city;
  const { currentCity, onRemove } = useCities();
  return (
    <li
      className={`${styles.cityItem} ${
        currentCity.id === id ? styles.cityItemActive : ""
      }`}
    >
      <Link
        className={styles.link}
        to={`${id}?lat=${JSON.parse(position).lat}&lng=${JSON.parse(position).lng}`}
      >
        <img
          src={`https://flagcdn.com/20x15/${emoji}.png`}
          className={styles.img}
        />
        <p className={styles.name}>{cityName}</p>
        <time className={styles.date}>{formatDate(date)}</time>
      </Link>
      <button onClick={() => onRemove(id)} className={styles.deleteBtn}>
        &times;
      </button>
    </li>
  );
}
