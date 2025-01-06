import {useEffect, useState } from "react";

const Navbar = () => {

  const [darkMode, setDarkMode] = useState('false');

  useEffect(() => {
   if (darkMode){
    document.documentElement.classList.add('dark');
   } else {
    document.documentElement.classList.remove('dark');
   }
  }, [darkMode])

/*const [theme, setTheme] = useState('light');

useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

const handleThemeSwitch = () => {
  setTheme(theme === "light" ? "dark" : "light");
};*/

return (
    <div>
        <header className="border-b shadow-xl bg-white dark:bg-indigo-950 dark:border-none md:p-1">
          <nav className="flex items-center justify-center md:justify-between sm:justify-between md:gap-28 text-center gap-28 py-2 px-20 md:py-3.5 px-28">
            <h1 className="text-md min-w-32 font-semibold dark:text-white md:text-xl">
              Shark<span className="text-md text-yellow-600 cursor-pointer">savvy</span> Quiz
            </h1>
            <button onClick={()=>{
              setDarkMode(!darkMode);
            }} className="p-2 rounded-full font-semibold text-sm border-2 border-black hover:scale-105
            transition-all duration-300 dark:bg-black dark:border-white dark:text-white box-border">{darkMode ? 'Light' : 'Dark'} Mode</button>
          </nav>
        </header>
    </div>
  )
}

export default Navbar
