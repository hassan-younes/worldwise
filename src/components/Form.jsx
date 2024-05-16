import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "./Button";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesConext";
import CountryCodeResolver from "../hooks/CountryCodeResolver";
import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import ReactDatePicker from "react-datepicker";
function Form() {
  const { createCity, isLoading } = useCities();

  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();
  const [emoji, country, cityName, setCityName] = CountryCodeResolver(lat, lng);


  async function handleSubmit(e) {
    e.preventDefault();
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat:lat, lng:lng },
      id: lat,
    };
    await createCity(newCity);
    navigate("../cities");
  }
  if (!lat && !lng) return <Message>click on map to add city</Message>;
  return (
    <form
      className={`${styles.form} ${isLoading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          required
        />
        <span className={styles.flag}>
          <img
            src={`https://flagcdn.com/20x15/${emoji}.png`}
            className={styles.img}
          />
        </span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <ReactDatePicker
          id="date"
          selected={date}
          onChange={(date) => setDate(date)}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            setCityName(".");
            navigate("../cities");
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
