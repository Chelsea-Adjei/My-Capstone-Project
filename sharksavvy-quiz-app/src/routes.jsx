import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import QuestionCard from './components/QuestionCard';
import QuizStart from './components/QuizStart';
import ScoreSummary from './components/ScoreSummary';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<QuizStart />} />
        <Route path="/quiz" element={<QuestionCard />} />
        <Route path="/score-summary" element={<ScoreSummary />} />
      </Route>
    </Routes>
  );
}