import React, { FC } from 'react';


const QuizPage:FC = ()=> {
  return (
    <div>
    <div className='flex justify-around bg-gray-800 px-3 py-2 items-center text-white'>
      <h1>CodeYogi | Welcome, Neeraj </h1>
      <div>
        <button className='bg-blue-700 px-3 py-3'>00:00</button>
        <button  className='bg-blue-700 ml-2 px-3 py-3'>LogOut</button>
      </div>
    </div>
    <h1 className='flex  justify-center'>No Active Question</h1>
    </div>
  );
}

export default QuizPage;