import "./App.css";
import QuestionCard from "./components/QuestionCard";
import QuizStart from "./components/QuizStart";
import ScoreSummary from "./components/ScoreSummary";

function App() {
  return (
    <>
      <QuizStart />
      <QuestionCard />
      <ScoreSummary />      
    </>
  );
}

export default App;
