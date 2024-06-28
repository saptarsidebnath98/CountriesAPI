
export default function Cards({ img, name, population, region, capital }) {

    const formattedPopulation = population.toLocaleString('en-IN');
    return (
        <div className="w-72 h-96 shadow-xl rounded-md overflow-hidden pb-36">
            <div className="w-full h-48">
                <img
                    src={img}
                    alt={`${name} flag`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col px-4 py-4 bg-white h-48 overflow-y-auto">
                <h2 className="my-2 text-lg font-bold">{name}</h2>
                <p><b>Population: </b>{formattedPopulation}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </div>
    )
}
