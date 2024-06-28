import Header from "./components/Header";
import CountryProvider from "./components/CountryContext";
import CountryList from "./components/CountryList";

function App() {

  return (
    <div className="w-full ">
      <Header />
      <main className="flex flex-col">
        <div>
          search bar
        </div>
        <CountryProvider>
          <div className="px-16 my-6 h-auto gap-12 flex flex-wrap justify-between py-8">
            <CountryList/>
          </div>
        </CountryProvider>
      </main>
    </div>
  )
}

export default App;
