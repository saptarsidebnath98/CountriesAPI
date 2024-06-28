
export default function Cards({ img, name, population, region, capital, darkMode }) {

    const formattedPopulation = population.toLocaleString('en-IN');
    return (
        <div className={`w-52 md:w-72 h-80 md:h-96 shadow-xl rounded-md overflow-hidden pb-36 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
            <div className="w-full h-40 md:h-48">
                <img
                    src={img}
                    alt={`${name} flag`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col px-4 py-4 h-40 md:h-48 overflow-y-auto">
                <h2 className={`my-2 text-base md:text-lg font-bold ${darkMode ? 'text-yellow-400' : 'text-black'}`}>{name}</h2>
                <p><b>Population: </b>{formattedPopulation}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </div>
    )
}
