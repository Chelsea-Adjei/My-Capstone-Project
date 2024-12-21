import React from 'react'

const QuizStart = () => {
  return (
    <div>
        <main className="flex min-h-screen flex-col p12 bg-neutral-100">
        <header className="border-b shadow-lg">
        <nav className="max-w-7xl w-full mx-auto py-[10px] px-5 flex items-center justify-between">
            <h1 className="text-xl font-semibold">Shark<span className="text-1xl text-yellow-400">savvy</span> Quiz</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
        </nav>
        </header>
        <section className="max-w-7x1 w-full mx-auto px-5">
            <div className="flex flex-row p-28">
            <div className="flex flex-col gap-7">
            <h1 className="text-5xl font-thin">Welcome to<br/><span className="text-6xl font-bold">Sharksavvy Quiz!</span></h1>
            <p className="text-l font-thin italic">Select the options to get started.~</p>
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
            <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="numQuestions" className="block text-sm font-medium text-gray-700">
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
  )
}

export default QuizStart