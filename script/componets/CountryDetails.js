import React, { useState, useEffect } from "react";

const CountryDetails = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect( ()=>{

  const fetchCountryData = async() => {
    try{
    const responce = await fetch('https://restcountries.com/v3.1/all')
    const Data = await responce.json();
    } catch(error){
    setError(error)
    } finally{
      setLoading(false);
    }
}

  },[])
}
if(loading){
  return <div>Loading.... please wait!</div>
}
if(error){
  return <p>Ooops!! sorry, something went wrong</p>
}


export default CountryDetails;
