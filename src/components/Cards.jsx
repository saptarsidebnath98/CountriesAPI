
export default function Cards({img, name, population, region, capital}) {
    return (
        <div className="bg-stone-50 w-64 h-96 shadow-md rounded-md pb-36">
            <img src={img} className="w-full h-auto rounded-t-md" />
            <div className="flex flex-col px-4 h-full rounded-b-md py-4">
                <h2 className="my-2 text-lg font-bold">{name}</h2>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </div>
    )
}
