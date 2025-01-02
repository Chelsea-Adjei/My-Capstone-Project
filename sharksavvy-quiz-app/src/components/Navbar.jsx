import { useState } from "react";
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'


const Navbar = () => {

const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
setDarkMode(!darkMode)
}

return (
    <div className={`dark:bg-black ${darkMode && "dark"}`}>
        <header className="border-b shadow-xl bg-white dark:bg-indigo-950 dark:border-none md:p-1">
          <nav className="w-full flex items-center justify-around md:justify-between py-2 px-20 md:py-3.5 px-28">
            <h1 className="text-md font-semibold dark:text-white md:text-xl">
              Shark<span className="text-1xl text-yellow-600 cursor-pointer">savvy</span> Quiz
            </h1>
            <div className=" flex items-center bg-gray-900 py-1.5 px-2 rounded-2xl">  
            <input className="p-1.5 bg-transparent border-0 outline-0 text-lg max-w-52" type="text" placeholder="Search" />

            <img className="w-5 cursor-pointer" src={search_icon_light} alt=""/>
            </div> 
            <button  onClick={toggleDarkMode} className="py-3 px-5 rounded-full font-semibold border-2 border-black hover:scale-105
            transition-all duration-300 dark:text-white dark:border-white">{darkMode ? "Light" : "Dark"} Mode</button>
          </nav>
        </header>
    </div>
  )
}

export default Navbar
