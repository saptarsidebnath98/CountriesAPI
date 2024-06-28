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
      <main className={`flex flex-col ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <CountryProvider darkMode={darkMode}>
            <CountryList darkMode={darkMode}/>
        </CountryProvider>
      </main>
    </div>
  )
}

export default App;
