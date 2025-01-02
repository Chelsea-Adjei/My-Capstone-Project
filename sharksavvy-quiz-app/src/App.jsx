import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import QuestionCard from "./components/QuestionCard";
import QuizStart from "./components/QuizStart";
import ScoreSummary from "./components/ScoreSummary";
import Navbar from "./components/Navbar";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<QuizStart />} />
      <Route path="/" element={<QuestionCard />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <Navbar />
      <QuizStart />
      <QuestionCard />
      <ScoreSummary />
          
    </>
  );
}

export default App;
