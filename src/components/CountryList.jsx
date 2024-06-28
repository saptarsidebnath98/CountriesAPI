import { useContext } from "react";
import { CountryContext } from "./CountryContext.jsx";
import Cards from "./Cards.jsx";

export default function CountryList() {

    const {countries, loading, error} = useContext(CountryContext);

    if(loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

  return (
    <div className="px-8 md:px-16 my-6 h-auto gap-12 flex flex-wrap justify-between py-8">
    {countries.map((country)=> (
        <button key={country.name.official} className="text-left">
        <Cards img={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital}/>
        </button>
    ))}
    </div>
  )
}
