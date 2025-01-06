import React, { useState, useEffect } from "react";

const CountryDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true); 
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        const data = await response.json();
        setDetails(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchCountryData();
  }, []); 

  if (loading) {
    return <div>Loading... please wait!</div>;
  }

  if (error) {
    return <p>Oops! Sorry, something went wrong: {error}</p>;
  }

  return (
    <div>
      <h1>Country Details</h1>
      <ul>
        {details &&
          details.map((country) => (
            <li key={country.cca3}>
              {country.name.common} - Population: {country.population}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CountryDetails;
