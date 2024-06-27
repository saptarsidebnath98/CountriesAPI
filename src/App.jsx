import { useEffect } from "react";
import Header from "./components/Header";
import Data from "./components/Data";
function App() {

  return (
    <div className="w-full ">
     <Header/>
     <main className="flex flex-col">
     <div>
       search bar
     </div>
     <div>
        <Data/>
     </div>
     </main>
    </div>
  )
}

export default App;
