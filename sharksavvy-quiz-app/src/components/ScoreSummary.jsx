import { useLocation, useNavigate } from "react-router-dom";
import "./QuestionCard.jsx";
import "./QuizStart.jsx";

const ScoreSummary = () => {
  const location = useLocation();
  const { correctAnswersCount, answers } = location.state || {
    correctAnswersCount: 0,
    answers: [],
  };

  const navigate = useNavigate();

  const handlePlayAgain = () => {
    navigate("/");
  };

  return (
    <main className="flex flex-col min-h-screen dark:bg-black bg-violet-300">
      <div className="flex flex-col md:flex-row justify-center items-center p-20 gap-24">
        <div>
          <h1 className="text-lg sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl font-light dark:text-white">Quiz Completed!</h1>
          <h2 className="text-2xl xl:text-4xl pt-4 font-semibold dark:text-white">Your Score...</h2>
          <div className="flex flex-col lg:flex-col items-center border border-yellow-500 shadow-xl w-60
           sm:w-72 md:w-80 xl:w-96 lg:max-w-md lg:mx-auto mt-8 p-4 gap-7 h-96 overflow-y-auto rounded-md bg-slate-100">
            <h1 className="text-lg font-bold">Summary of Answers</h1>
            <div className="flex flex-col gap-4 pb-2">
              {answers.map((answer, index) => (
                <div key={index}>
                  <h2 className="text-md font-light">{answer.question}</h2>
                  <p>
                    <span
                      className={`font-semibold ${
                        answer.isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {answer.isCorrect ? "Correct" : "Wrong"}
                    </span>
                    - Your Answer:{" "}
                    <span
                      className={`${
                        answer.isCorrect ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {answer.selectedAnswer}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-40 gap-7">
          <div className="w-60 xl:w-80 max-w-md mx-auto p-6 flex flex-col items-center border border-b bg-slate-100 rounded-2xl gap-4">
            <h1 className="font-semibold text-lg">
              Shark<span className="font-semibold text-yellow-500">savvy</span>{" "}
              Quiz
            </h1>
            <h2 className="text-black text-9xl">{correctAnswersCount}</h2>
            <p className="text-gray-500 text-sm">
              You scored {correctAnswersCount} out of {answers.length}
            </p>
          </div>
          <button
            className="w-full bg-yellow-500 shadow-lg shadow-blue-500/40 font-semibold py-2 px-4 rounded-xl hover:bg-yellow-300"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </main>
  );
};

export default ScoreSummary;
