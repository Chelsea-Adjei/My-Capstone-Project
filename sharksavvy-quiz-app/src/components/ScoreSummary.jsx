import React from 'react'
import './QuestionCard.jsx'

const ScoreSummary = () => {
  return (
    <>
        <main className="flex flex-col min-h-screen bg-neutral-200">
            <div className="flex flex-col justify-center">
                <div>
                <h1>Quiz Completed!</h1>
                <h2>You Scored...</h2>
                </div>
                <div>
                    <h1>Sharksavvy Quiz</h1>
                    <h2>8</h2>
                    <p>out of 10</p>
                </div>
                <button>Play Again</button>
            </div>
        </main>
    </>
  )
}

export default ScoreSummary
