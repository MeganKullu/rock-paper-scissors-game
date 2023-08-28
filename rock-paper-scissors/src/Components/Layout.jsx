import React from 'react';
import { useState } from 'react';
import MainLayout from './MainLayout';
import SecondLayout from './SecondLayout';
import ThirdLayout from './ThirdLayout';
import FourthLayout from './FourthLayout';

const Layout = () => {
  const { userChoice, setUserChoice } = useState(null);
  const { compChoice, setCompChoice } = useState(null);
  const { userScore, setUserScore } = useState(0);
  const { rules, setRules} = useState(false);

  const choices = ["Rock", "Paper", "Scissors"];

  // function to handle button click actions
  const handleUserChoice = (userChoice) => {
    setUserChoice(userChoice);

    // logic to handle computers choice
    const randomIndex = Math.floor(Math.random() * choices.length);
    setCompChoice(choices[randomIndex]);

    //Determine winner and set the score

    if ((userChoice === "Rock") && (compChoice === "Scissors") ||
      (userChoice === "Paper") && (compChoice === "Rock") ||
      (userChoice === "Scissors") && (compChoice === "Paper")
    ) {
      setUserScore(userScore + 1)
    }
     
    else {
      setUserScore(userScore - 1)
    }

  }

  const toggleRules = () => {
    setRules(true)
  }

  
  return (
    <div className='bg-radial flex flex-col md:justify-center md:items-center'>
      <div className='flex flex-col  px-4 min-h-screen w-full md:w-1/2'>
        <article className='rounded-lg border-2 py-2 pl-4 pr-2 mt-6 flex w-full place-content-between'>

          <div className='h-16 w-24 flex justify-center items-center my-3'>
            <img src="../images/logo.svg" alt="logo" />
          </div>

          <div className='bg-white rounded-lg flex flex-col justify-center items-center w-28'>
            <p className='text-paper text-xs'>SCORE</p>
            <div className='text-dark-text text-4xl lg:ftext-6xl font-extrabold'>{userScore}</div>
          </div>
        </article>

        <MainLayout/>

        <div className='lg:hidden border border-white rounded-lg text-white self-center w-1/3 mt-24 lg:mt-4 mb-10 flex justify-center items-center'>
          <button onClick={{ toggleRules }} aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
        </div>

      </div>
      <div className='hidden lg:flex self-end border border-white rounded-lg text-white w-1/12 mt-16 mb-10 mr-14 justify-center items-center'>
        <button onClick={{ toggleRules }} aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
      </div>
    </div>
  )
}

export default Layout