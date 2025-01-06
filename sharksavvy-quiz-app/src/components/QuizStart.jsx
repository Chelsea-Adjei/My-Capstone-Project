import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizStart = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchQuestions = async (e) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    const url = `https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.results.length === 0) {
        throw new Error(
          "No questions found for the selected options. Please try again with different options."
        );
      } else {
        // Redirect to Quiz Page with questions as state
        navigate("/quiz", { state: { questions: data.results } });
        console.log(data.results);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <main className="flex flex-col min-h-screen bg-sky-200 dark:bg-black">
        <section className="max-w-7x1 w-full mx-auto px-5 md:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-center items-center p-24 gap-16">
            <div className="flex flex-col gap-7 md:pl-12 justify-center">
              <h1 className="text-sm sm:text-2xl md:text-4xl font-light dark:text-white">
                Welcome to
                <br />
                <span className="text-5xl sm:text-7xl md:text-7xl font-bold">
                  Sharksavvy Quiz!
                </span>
              </h1>
              <p className="text-sm sm:lg md:text-xl font-light italic dark:text-white">
                Select the options to get started.
              </p>
            </div>
            <div className=" w-96 lg:max-w-3xl xl:max-w-4xl p-4">
              <div className="p-4 justify-center text-center lg:w-96 h-96 bg-white mb-4 shadow-md rounded-md opacity-90">
                <form onSubmit={fetchQuestions}>
                  {/* Category Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Select Category
                    </label>
                    <input
                      type="text"
                      placeholder="Search for a category to start quiz"
                      className="border px-4 py-2 border-gray-300 rounded-md w-full bg-white text-gray-900"
                      value={category}
                      onChange={(e) => 
                       setCategory(e.target.value)}
                      required
                    />
                    <ul className="absolute z-10 min-w-80 md:w-80 lg:w-96 mt-1 bg-white border rounded-md h-60 overflow-y-auto">
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400">General Knowledge</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Entertainment: Books</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400">Entertainment: Film</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Entertainment: Music</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Sports</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400">Geography</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Arts</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Animals</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Science & Nature</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >Entertainment: Video Games</li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-blue-400" >History</li>
                    </ul>
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
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      required
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
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Start Quiz"}
                    </button>
                  </div>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuizStart;
