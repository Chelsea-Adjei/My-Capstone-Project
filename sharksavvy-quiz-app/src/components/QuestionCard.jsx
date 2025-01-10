import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { shuffleArray } from "../utils/shuffle";

const QuestionCard = () => {
  const location = useLocation();
  const { questions } = location.state || { questions: [] };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length > 0) {
      const currentQuestion = questions[currentQuestionIndex];
      const allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
      setShuffledAnswers(shuffleArray(allAnswers));
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
    } else {
      // Navigate to score summary with correct answers count and answers
      navigate("/score-summary", { state: { correctAnswersCount, answers } });
    }
  };

  const handleAnswerSelect = (answer) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    setIsAnswered(true);
    const isCorrect = selectedAnswer === currentQuestion.correct_answer;
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
    setAnswers([
      ...answers,
      {
        question: currentQuestion.question,
        selectedAnswer,
        isCorrect,
      },
    ]);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <main className="bg-violet-300 h-100vh dark:bg-black">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col sm:ml-16 md:ml-16 p-20 xl:px-48 gap-24">
          {questions.length > 0 ? (
            <div className="flex flex-col justify-center gap-7">
              <p>
                {currentQuestionIndex + 1} of {questions.length} Questions
              </p>
              <h1 className="text-blue-700 text-1xl sm:text-2xl font-bold md:text-3xl lg:text-4xl ">
                {currentQuestion.question}
              </h1>
              <ul className="flex flex-col justify-center sm:w-80 md:w-full lg:w-full xl:w-full gap-6">
                {shuffledAnswers.map((answer, i) => (
                  <li
                  key={i}
                  className={`flex items-center h-10 p-4 border border-blue-300 rounded-md bg-white text-md font cursor-pointer ${
                    isAnswered
                      ? answer === currentQuestion.correct_answer
                        ? "bg-green-700 text-white"
                        : selectedAnswer === answer
                        ? "bg-red-700 text-white"
                        : ""
                      : selectedAnswer === answer
                      ? "bg-blue-900 text-white"
                      : ""
                  }`}
                  onClick={() => handleAnswerSelect(answer)}
                >
                  {answer}
                </li>
                
                ))}
              </ul>
              <button
                className="sm:w-80 md:w-full lg:w-full xl:w-full bg-yellow-500 shadow-lg shadow-blue-500/30 font-semibold py-2 px-4 rounded-xl hover:bg-yellow-300"
                onClick={isAnswered ? handleNextQuestion : handleSubmit}
                disabled={!selectedAnswer}
              >
                {isAnswered
                  ? currentQuestionIndex < questions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"
                  : "Submit"}
              </button>
            </div>
          ) : (
            <p>No questions available.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default QuestionCard;
