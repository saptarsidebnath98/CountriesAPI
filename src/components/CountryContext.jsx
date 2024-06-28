import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

//context created
export const CountryContext = createContext();

//provider componenet created
export default function CountryProvider({children}) {

   const [countries, setCountries] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   //API fetch data
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
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }, []);

    // if(loading) return <div>Loading...</div>
    // if (error) return <div>Error: {error.message}</div>

    console.log(countries.map((country) => country.name.official));
    
  return (
    <CountryContext.Provider value={{countries, loading, error}}>
        {children}
    </CountryContext.Provider>
  )
}
