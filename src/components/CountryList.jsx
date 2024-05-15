import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import { useCities } from "../contexts/CitiesConext";
export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message>Add your first city by clicking on the map</Message>;
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.countryName).includes(city.country))
      return [
        ...arr,
        { countryName: city.country, emoji: city.emoji, id: city.id },
      ];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem
          country={country}
          className={styles.countryItem}
          key={country.id}
        />
      ))}
    </ul>
  );
}
