import React from "react";
import Navbar from "./Navbar";

const QuizStart = () => {


  return (
    <div>
      <main className="flex flex-col min-h-screen bg-sky-200 dark:bg-black">
        <section className="max-w-7x1 w-full mx-auto px-5 md:p-12">
          <div className="flex flex-col md:flex-row justify-center items-center p-24 gap-16">
            <div className="flex flex-col gap-7 md:flex justify-center">
              <h1 className="text-lg md:text-3xl font-light dark:text-white">
                Welcome to
                <br />
                <span className="text-5xl md:text-7xl font-bold">Sharksavvy Quiz!</span>
              </h1>
              <p className="text-md md:text-2xl font-light italic dark:text-white">
                Select the options to get started.
              </p>
            </div>
            <div className="w-96 lg:max-w-3xl xl:max-w-4xl p-4">
              <div className="p-4 text-center bg-white mb-4 shadow-md rounded-md opacity-90">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizStart;
