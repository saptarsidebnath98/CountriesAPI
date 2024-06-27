import { useEffect } from "react";
import { useState } from "react";

export default function Data() {

   const [countries, setCountries] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setCountries(data);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, []);

    if(loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    console.log(countries[0]);
    
  return (
    <ul>
        {countries.map((country) => {
            <li key={country.name.official}>{country.name.common}</li>
        })}
    </ul>
  )
}
