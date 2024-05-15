import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { countryName, emoji } = country;
  return (
    <li className={styles.countryItem}>
      {/* <span>{country.emoji}</span> */}
      <img
        src={`https://flagcdn.com/20x15/${emoji}.png`}
        className={styles.img}
      />
      <span>{countryName}</span>
    </li>
  );
}

export default CountryItem;
