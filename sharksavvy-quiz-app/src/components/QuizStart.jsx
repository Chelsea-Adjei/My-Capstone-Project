const QuizStart = () => {
  return (
    <div>
      <main className="flex flex-col min-h-screen bg-neutral-200">
        <header className="border-b shadow-xl">
          <nav className="max-w-7xl w-full mx-auto py-[20px] px-5 flex items-center justify-between">
            <h1 className="text-xl font-semibold">
              Shark<span className="text-1xl text-yellow-600">savvy</span> Quiz
            </h1>
            <h1>Search</h1>
          </nav>
        </header>
        <section className="max-w-7x1 w-full mx-auto px-5">
          <div className="flex flex-row p-40">
            <div className="flex flex-col gap-7">
              <h1 className="text-6xl font-thin">
                Welcome to
                <br />
                <span className="text-7xl font-bold">Sharksavvy Quiz!</span>
              </h1>
              <p className="text-xl font-thin italic">
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
