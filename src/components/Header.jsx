
export default function Header({darkMode, handleMode}) {
  return (
    <header className={`w-full shadow-xl py-5 ${darkMode ? 'bg-slate-900 text-stone-50' : 'bg-white text-stone-800'}`}>
       <div className="w-3/4 flex justify-between mx-auto pb-2">
          <h3 className="text-2xl font-bold">Where in the world?</h3>
          <button 
          className="flex items-center gap-2 font-semibold cursor-pointer"
          onClick={handleMode}
          ><i className="fa-regular fa-moon"></i> 
          Dark Mode
          </button>
       </div>
     </header>
  )
}
