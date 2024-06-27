import Header from "./components/Header";
import Data from "./components/Data";
import Cards from "./components/Cards";
function App() {

  return (
    <div className="w-full ">
     <Header/>
     <main className="flex flex-col">
     <div>
       search bar
     </div>
     <div className="bg-stone-500 px-16 my-6 h-auto gap-12 flex flex-wrap justify-between py-8">
       <Cards/>
     </div>
     </main>
     <Data/>
    </div>
  )
}

export default App;
