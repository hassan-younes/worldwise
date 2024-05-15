import { useState, useEffect } from "react";
export default function CountryCodeResolver(lat, lng) {
  const [emoji, setEmoji] = useState(null);
  const [country, setCountry] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if (!lat && !lng) return;
    const fetchCountryCode = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        if (response.ok) {
          const data = await response.json();
          // Extract country code from the response
          const countryCode = data.address.country_code.toLowerCase();
          const countryname = data.address.country;
          const cityname =  data.address.village || data.address.subdistrict 
           setEmoji(countryCode);
          setCountry(countryname);
          setCityName(cityname);

          console.log(countryCode);
        } else {
          // Handle error response
          console.error("Failed to fetch country code:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching country code:", error.message);
      }
    };

    fetchCountryCode();

    // Clean up function
    return () => {
      // Cleanup code if needed
    };
  }, [lat, lng]);

  return [emoji, country, cityName, setCityName];
}
