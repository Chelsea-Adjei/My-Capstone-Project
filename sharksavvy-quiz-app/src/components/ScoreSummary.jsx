import React from 'react'
import './QuestionCard.jsx'
import './QuizStart.jsx'

const ScoreSummary = () => {
  return (
    <>
        <main className="flex flex-col min-h-screen bg-sky-200">
            <div className="flex flex-row justify-center mt-12 p-40 gap-24">
              <div>
              <h1 className="text-5xl font-light">Quiz Completed!</h1>
              <h2 className="text-5xl pt-4">Your Score...</h2>
              <div className="flex flex-col items-center border border-yellow-500 shadow-xl max-w-md mx-auto mt-8 pt-4 gap-7">
                <h1 className="text-lg font-bold">Summary of Answers</h1>
                <div className="flex flex-col gap-4 pb-2">
                <h2 className="text-md font-light">What was the first Disney animated <br />feature movie that was not based <br />on an already existing story?</h2>
                <p><span className="font-semibold">Correct</span>- Your Answer: <span className="text-green-600">The Lion's King</span></p>

                <h2 className="text-md font-light">What was the first Disney animated <br />feature movie that was not based <br />on an already existing story?</h2>
                <p><span className="font-semibold">Wrong</span>- Your Answer: <span className="text-red-600">Pinocchio</span></p>
                </div>
              </div>
              </div>
              <div className="flex flex-col items-center gap-7">
                <div className="w-80 max-w-md mx-auto p-6 flex flex-col items-center border border-b bg-slate-100  rounded-2xl gap-4">
                <h1 className="font-semibold text-lg">Shark<span className="font-semibold text-yellow-500">savvy</span> Quiz</h1>
                <h2 className="text-black text-9xl">6</h2>
                <p className="text-gray-500 text-sm">You scored 6 out of 10</p>
                </div>
                <button className="w-full bg-yellow-500 shadow-lg shadow-blue-500/40 font-semibold py-2 px-4 rounded-xl hover:bg-yellow-300">Play Again</button>
              </div>
            </div>
        </main>
    </>
  )
}

export default ScoreSummary
