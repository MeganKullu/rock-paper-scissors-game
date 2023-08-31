import React from 'react';
import { useState, useEffect } from 'react';
import MainLayout from './MainLayout';
import SecondLayout from './SecondLayout';
import ThirdLayout from './ThirdLayout';
import FourthLayout from './FourthLayout';

const Layout = () => {
  const [begun, setHasBegun] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [selected, setSelected] = useState(false);
  const [housePicked, setHousePicked] = useState(false);
  const [result, setResult] = useState(false);


  const choices = ["Rock", "Paper", "Scissors"];

  useEffect(() => {
    setHasBegun(true);
  }, [])

  // function to handle button click actions
  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setSelected(true);
    setHasBegun(false);

    // logic to handle computers choice
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      setCompChoice(choices[randomIndex]);
      setHousePicked(true);
      setSelected(false);
    }, 1500)



    //Determine winner and set the score
    setTimeout(() => {
      setHousePicked(false);
      if ((userChoice === "Rock") && (compChoice === "Scissors") ||
        (userChoice === "Paper") && (compChoice === "Rock") ||
        (userChoice === "Scissors") && (compChoice === "Paper")
      ) {
        setUserScore(userScore + 1)
      }

      if ((userChoice === "Rock") && (compChoice === "Rock") ||
        (userChoice === "Paper") && (compChoice === "Paper") ||
        (userChoice === "Scissors") && (compChoice === "Scissors")) {
        setUserScore(userScore + 0)
      }

      else {
        setUserScore(userScore - 1)
      }

      setResult(true);

    }, 2800)

  }


  return (
    <div className='bg-radial flex flex-col md:justify-center md:items-center min-h-screen'>
      <div className='flex flex-col px-4 w-full md:w-1/2'>
        <article className='rounded-lg border-2 py-2 pl-4 pr-2 mt-6 flex w-full place-content-between'>

          <div className='h-16 w-24 flex justify-center items-center my-3'>
            <img src="../images/logo.svg" alt="logo" />
          </div>

          <div className='bg-white rounded-lg flex flex-col justify-center items-center w-28'>
            <p className='text-paper text-xs'>SCORE</p>
            <div className='text-dark-text text-4xl lg:ftext-6xl font-extrabold'>{userScore}</div>
          </div>
        </article>
        
        {begun && <MainLayout handleUserChoice={handleUserChoice} />}
        {selected && <SecondLayout userChoice={userChoice} />}
        {housePicked && <ThirdLayout userChoice={userChoice} compChoice={compChoice} />}
        {result && <FourthLayout userChoice={userChoice} compChoice={compChoice} />}


        <div className='lg:hidden border border-white rounded-lg text-white self-center w-1/3 mt-24 lg:mt-4 mb-10 flex justify-center items-center'>
          <button aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
        </div>

      </div>
      <div className='hidden lg:flex self-end border border-white rounded-lg text-white w-1/12 mt-16 mb-10 mr-14 justify-center items-center'>
        <button aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
      </div>
    </div>
  )
}

export default Layout