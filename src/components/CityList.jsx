import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import { useCities } from "../contexts/CitiesConext";
export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message>Add your first city by clicking on the map</Message>;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          className={styles.cityItem}
          position={city.position}
          key={city.id}
        />
      ))}
    </ul>
  );
}
