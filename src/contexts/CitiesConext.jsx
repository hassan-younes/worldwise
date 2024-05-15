import { createContext, useContext, useEffect, useState } from "react";
import { getcities } from "../../supabase/Citiesapi";
const CitiesContext = createContext();
const BASE_URL = "http://localhost:9000";
function CitiesProvider({ children }) {
  const [currentCity, setCurrentCity] = useState({
    position: { lat: 38.727881642324164, lng: -9.140900099907554 },
  });
  const [cities, setCities] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(
    function () {
      setIsloading(true);
      async function fetechcity() {
        try {
          
          // const res = await fetch(`${BASE_URL}/cities`);
          // const data = await res.json();
          const data=getcities();
          setCities(data);
        } catch {
          alert("There was an error loading data");
        } finally {
          setIsloading(false);
        }
      }

      fetechcity();
    },

    [setCities]
  );

  async function getCity(id) {
    setIsloading(true);
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      setCurrentCity(data);
      console.log(data);
    } catch {
      throw new Error("there was a problem in fetching data from server");
    } finally {
      setIsloading(false);
    }
  }

  async function createCity(newCity) {
    setIsloading(true);
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch {
      throw new Error("there was a problem in fetching data from server");
    } finally {
      setIsloading(false);
    }
  }
  async function onRemove(id) {
    setIsloading(true);
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      throw new Error("there was a problem in fetching data from server");
    } finally {
      setIsloading(false);
    }
  }
  const value = {
    cities,
    isLoading,
    setIsloading,
    setCities,
    onRemove,
    currentCity,
    setCurrentCity,
    createCity,
    getCity,
  };
  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("citiesContext use outside provider");
  return context;
}
export { CitiesProvider, useCities };
