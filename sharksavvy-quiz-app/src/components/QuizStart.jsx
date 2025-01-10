import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchableSelect from "./shared/search";

const QuizStart = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://opentdb.com/api_category.php");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data.trivia_categories);
      } catch (error) {
        setError("Failed to fetch categories.");
      }
    };

    fetchCategories();
  }, []);

  const fetchQuestions = async (e) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

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
      <main className="flex flex-col min-h-screen bg-violet-300 dark:bg-black">
        <section className="max-w-7x1 w-full mx-auto px-5 md:p-12">
          <div className="flex flex-col xl:flex-row justify-center items-center p-24 gap-24">
            <div className="flex flex-col gap-7 md:flex justify-center">
              <h1 className="text-sm md:text-2xl xl:text-xl font-light dark:text-white">
                Welcome to
                <br />
                <span className="text-5xl sm:text-5xl md:text-6xl lg:text-1xl xl:text-6xl font-bold">
                  Sharksavvy Quiz!
                </span>
              </h1>
              <p className="text-md md:text-2xl xl:text-xl font-light italic dark:text-white">
                Select the options to get started.
              </p>
            </div>
            <div className="w-80 h-80 flex justify-center md:max-w-96 lg:w-96 xl:w-96 mt-18">
              <div className="p-4 text-center bg-white mb-4 shadow-md rounded-md opacity-90 xl:w-[550px]">
                <form onSubmit={fetchQuestions}>
                  {/* Searchable Select for Category */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Search or Select Category
                    </label>
                    <SearchableSelect
                      options={categories}
                      value={category}
                      onChange={setCategory}
                      placeholder="Search or select a category..."
                    />
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
