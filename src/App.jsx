import Header from "./components/Header";
import CountryProvider from "./components/CountryContext";
import CountryList from "./components/CountryList";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function handleMode(){
    setDarkMode(prevMode => !prevMode);
  }

  return (
    <div className="w-full font-nunito">
      <Header darkMode={darkMode} handleMode={handleMode}/>
      <main className="flex flex-col">
        <div>
          search bar
        </div>
        <CountryProvider>
          <div className="px-8 md:px-16 my-6 h-auto gap-12 flex flex-wrap justify-between py-8">
            <CountryList/>
          </div>
        </CountryProvider>
      </main>
    </div>
  )
}

export default App;
