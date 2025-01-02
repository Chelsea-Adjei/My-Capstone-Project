import React from 'react'

const QuestionCard = () => {
  return (
    <>
        <main className="flex flex-col min-h-screen bg-sky-200">
        <div className="flex flex-col justify-center md:flex-row">
        <div className="flex flex-row justify-center mt-12 p-40 gap-24">
          <div className="flex flex-col gap-7">
          <p>1 of 10 Questions</p>
          <h1 className="text-blue-700 text-3xl font-bold sm:text-md">What was the first Disney animated <br />feature movie that was not based <br />on an already existing story?</h1>
          </div>
          <div className="flex flex-col gap-7 ">
           <ul className="flex flex-col gap-6">
             <li className="flex items-center h-10 p-4 border border-blue-300 rounded-md bg-white text-l font cursor-pointer">A. Snow White and the Seven Dwarfs</li>
              <li className="flex items-center h-10 p-4 border border-blue-300 rounded-md text-l bg-white cursor-pointer">B. Pinocchio</li>
              <li className="flex items-center h-10 p-4 border border-blue-300 rounded-md text-l bg-white cursor-pointer">C. The Lion's King</li>
              <li  className="flex items-center h-10 p-4 border border-blue-300 rounded-md text-l bg-white cursor-pointer"> D. Cinderella</li>
            </ul>
            <button className="w-full bg-yellow-500 shadow-lg shadow-blue-500/30 font-semibold py-2 px-4 rounded-xl hover:bg-yellow-300">Next Question</button>
          </div>
        </div>
        </div>
        </main>  
    </>
  )
}

export default QuestionCard
