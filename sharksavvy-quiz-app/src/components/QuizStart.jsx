import { useState } from "react";
import search_icon_light from '../assets/search-w.png'
import search_icon_dark from '../assets/search-b.png'

const QuizStart = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={`dark:bg-black ${darkMode && "dark"}`}>
      <main className="flex flex-col min-h-screen bg-sky-200 dark:bg-black">
        <header className="border-b shadow-xl bg-white dark:bg-indigo-950">
          <nav className="w-full flex items-center justify-between py-3.5 px-28 ">
            <h1 className="text-xl font-semibold dark:text-white">
              Shark<span className="text-1xl text-yellow-600 cursor-pointer">savvy</span> Quiz
            </h1>
            <div className=" flex items-center bg-gray-900 py-2.5 px-5 rounded-3xl">  
            <input className="p-1.5 bg-transparent border-0 outline-0 text-lg max-w-52" type="text" placeholder="Search" />

            <img className="w-5 cursor-pointer" src={search_icon_light} alt=""/>
            </div> 
            <button  onClick={toggleDarkMode} className="py-3 px-5 rounded-full font-semibold border-2 border-black hover:scale-105
            transition-all duration-300 dark:text-white dark:border-white">{darkMode ? "Light" : "Dark"}Mode</button>
          </nav>
        </header>
        <section className="max-w-7x1 w-full mx-auto px-5">
          <div className="flex flex-row p-40">
            <div className="flex flex-col gap-7">
              <h1 className="text-6xl font-thin dark:text-white">
                Welcome to
                <br />
                <span className="text-7xl font-bold">Sharksavvy Quiz!</span>
              </h1>
              <p className="text-xl font-thin italic dark:text-white">
                Select the options to get started.
              </p>
            </div>
            <div className="w-96 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
              <form>
                {/* Category Selection */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Category
                  </label>
                  <select
                    id="category"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">-- Select a Category --</option>
                    <option value="9">General Knowledge</option>
                    <option value="23">History</option>
                    <option value="18">Science</option>
                    <option value="12">Entertainment</option>
                  </select>
                </div>

                {/* Difficulty Selection */}
                <div className="mb-4">
                  <label
                    htmlFor="difficulty"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Difficulty
                  </label>
                  <select
                    id="difficulty"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="">-- Select Difficulty --</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>

                {/* Number of Questions */}
                <div className="mb-4">
                  <label
                    htmlFor="numQuestions"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Questions
                  </label>
                  <input
                    type="number"
                    id="numQuestions"
                    min="1"
                    max="50"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Start Quiz
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizStart;
