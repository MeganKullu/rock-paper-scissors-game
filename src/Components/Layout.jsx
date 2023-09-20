import React, { useState, useEffect } from 'react';
import MainLayout from './MainLayout';
import SecondLayout from './SecondLayout';
import ThirdLayout from './ThirdLayout';
import FourthLayout from './FourthLayout.jsx';
import Rules from './Rules';

const Layout = () => {
  const choices = ["Rock", "Paper", "Scissors"];

  const [begun, setHasBegun] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [userScore, setUserScore] = useState(Number(localStorage.getItem('gameState')) || 0);
  const [selected, setSelected] = useState(false);
  const [housePicked, setHousePicked] = useState(false);
  const [result, setResult] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [rules, setRules] = useState(false);
  const [userWins, setUserWins] = useState(false);
  const [houseWins, setHouseWins] = useState(false);



  // Load game state from local storage when the component mounts
  useEffect(() => {
    const savedGameState = localStorage.getItem('gameState');
    setUserScore(parseInt(savedGameState, 10) || 0);
    setHasBegun(true);
  }, []);

  // Save game state to local storage whenever the game state changes
  useEffect(() => {
    localStorage.setItem('gameState', userScore);
  }, [userScore]);

  const calculateGameResult = (choice, computerChoice) => {
    if (
      (choice === "Rock" && computerChoice === "Scissors") ||
      (choice === "Paper" && computerChoice === "Rock") ||
      (choice === "Scissors" && computerChoice === "Paper")
    ) {
      return "WIN";
    } else if (choice === computerChoice) {
      return "DRAW";
    } else {
      return "LOSE";
    }
  };

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    setSelected(true);
    setHasBegun(false);
  
    // logic to handle computer's choice
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];
      setCompChoice(computerChoice);
      setHousePicked(true);
      setSelected(false);
  
      // Calculate the game result using the updated state
      setTimeout(() => {
        setHousePicked(false);
  
        // Calculate the game result
        const gameResult = calculateGameResult(choice, computerChoice);
  
        // Determine who wins or if it's a draw
        if (gameResult === "WIN") {
          setUserWins(true);
          setHouseWins(false);
        } else if (gameResult === "LOSE") {
          setUserWins(false);
          setHouseWins(true);
        } else {
          setUserWins(false);
          setHouseWins(false);
        }
  
        // Update the user's score based on the result
        if (gameResult === "WIN") {
          setUserScore((prevUserScore) => prevUserScore + 1);
        } else if (gameResult === "LOSE") {
          setUserScore((prevUserScore) => prevUserScore - 1);
        }
  
        setResult(true);
      }, 800);
    },200);
  };
  


  const handlePlayAgain = () => {
    // Reset the game state when the user wants to play again

    setUserChoice(null);
    setCompChoice(null);
    setResult(false);
    setPlayAgain(false);
    setHasBegun(true); // Start a new game cycle

  };

  const handleRules = () => {
    setRules(true);
  }

  const handleCloseRules = () => {
    setRules(false);
  }

  return (
    <div className='bg-radial flex flex-col md:justify-center md:items-center min-h-screen w-full relative'>
      <div className='flex flex-col px-4 w-full justify-center items-center'>
        <article className='w-full md:w-3/4 lg:w-1/2'>
          <div className='rounded-lg border-2 py-2 pl-4 pr-2 mt-6 flex place-content-between'>
            <div className='h-16 w-24 flex justify-center items-center my-3'>
              <img src="/images/logo.svg" alt="logo" />
            </div>

            <div className='bg-white rounded-lg flex flex-col justify-center items-center w-28'>
              <p className='text-paper text-xs'>SCORE</p>
              <div className='text-dark-text text-4xl lg:ftext-6xl font-extrabold'>{userScore}</div>
            </div>
          </div>
        </article>

        {begun && !playAgain && <MainLayout handleUserChoice={handleUserChoice} />}
        {selected && !playAgain && <SecondLayout userChoice={userChoice} />}
        {housePicked && !playAgain && <ThirdLayout userChoice={userChoice} compChoice={compChoice} />}
        {result && !playAgain && <FourthLayout
          userChoice={userChoice}
          compChoice={compChoice}
          handlePlayAgain={handlePlayAgain}
          userWins={userWins}
          houseWins={houseWins}
        />}
        {rules && <Rules handleCloseRules={handleCloseRules} />}


        <div className='lg:hidden border border-white rounded-lg text-white self-center w-1/3 mt-24 md:mt-32 lg:mt-4 mb-10 flex justify-center items-center'>
          <button onClick={handleRules} aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest hover:text-paper'>RULES</button>
        </div>
      </div>

      <div className='hidden lg:flex self-end border border-white rounded-lg text-white w-1/12 mt-2 lg:mt-16 mb-10 mr-14 justify-center items-center'>
        <button onClick={handleRules} aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest hover:text-paper'>RULES</button> 
      </div>
      <div className='text-white self-center'>Coded by <a href="https://megankullu.netlify.app/ " className='hover:text-red-500 underline-offset-1'>Megan Kullu</a></div>

    </div>
  );
};

export default Layout;
