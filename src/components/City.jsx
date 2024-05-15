import styles from "./City.module.css";
import ButtonBack from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesConext";

import Spinner from "./Spinner";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City() {
  const { currentCity, isLoading, getCity } = useCities();
  const { id } = useParams();
  getCity(id);
  const navigate = useNavigate();

  const { cityName, emoji, date, notes } = currentCity;
  if (isLoading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span className={styles.img}>
            <img
              src={`https://flagcdn.com/16x12/${emoji}.png`}
              className={styles.img}
            />
          </span>
          {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack type={"back"} onClick={() => navigate(-1)}>
          &larr; Back
        </ButtonBack>
      </div>
    </div>
  );
}

export default City;
