export default function Cards() {
    return (
        <div className="bg-stone-50 w-64 h-80 shadow-md rounded-md pb-36">
            <img src="https://flagcdn.com/wf.svg" className="w-full h-auto rounded-t-md" />
            <div className="flex flex-col px-4 h-full rounded-b-md py-4">
                <h2 className="my-2 text-lg font-bold">Country</h2>
                <p><b>Population: </b>81770900</p>
                <p><b>Region: </b>Europe</p>
                <p><b>Capital: </b>Berlin</p>
            </div>
        </div>
    )
}
