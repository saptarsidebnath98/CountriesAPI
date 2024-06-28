import { useContext } from "react";
import { CountryContext } from "./CountryContext.jsx";
import Cards from "./Cards.jsx";

export default function CountryList() {

    const {countries, loading, error} = useContext(CountryContext);

    if(loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

  return (
    <>
    {countries.map((country)=> (
        <button key={country.name.official} className="text-left">
        <Cards img={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital}/>
        </button>
    ))}
    </>
  )
}
