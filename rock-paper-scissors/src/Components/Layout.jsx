import React, { useState, useEffect } from 'react';
import MainLayout from './MainLayout';
import SecondLayout from './SecondLayout';
import ThirdLayout from './ThirdLayout';
import FourthLayout from './FourthLayout.jsx';

const Layout = () => {
  const choices = ["Rock", "Paper", "Scissors"];

  const [begun, setHasBegun] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [selected, setSelected] = useState(false);
  const [housePicked, setHousePicked] = useState(false);
  const [result, setResult] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [showMainLayout, setShowMainLayout] = useState(false); // Initially, show MainLayout

  

  // Load game state from local storage when the component mounts
  useEffect(() => {
    const savedGameState = localStorage.getItem('gameState');
    if (savedGameState) {
      const parsedGameState = JSON.parse(savedGameState);
      setUserScore(parsedGameState.userScore);
    }
    setHasBegun(true);
  }, []);

  // Save game state to local storage whenever the game state changes
  useEffect(() => {
    const gameStateToSave = {
      userScore,
    };
    localStorage.setItem('gameState', JSON.stringify(gameStateToSave));
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

    // logic to handle computers choice
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

        setUserScore((prevUserScore) => {
          if (gameResult === "WIN") {
            return prevUserScore + 1;
          } else if (gameResult === "LOSE") {
            return prevUserScore - 1;
          } else {
            return prevUserScore;
          }
        });

        setResult(true);
      }, 2800);
    }, 1500);
  };

  
  const handlePlayAgain = () => {
    // Reset the game state when the user wants to play again
    
    setUserChoice(null);
    setCompChoice(null);
    setResult(false);
    setPlayAgain(true);
    setShowMainLayout(true);
  };

  return (
    <div className='bg-radial flex flex-col md:justify-center md:items-center min-h-screen w-full'>
      <div className='flex flex-col px-4 w-full justify-center items-center'>
        <article className='w-full lg:w-1/2'>
          <div className='rounded-lg border-2 py-2 pl-4 pr-2 mt-6 flex place-content-between'>
            <div className='h-16 w-24 flex justify-center items-center my-3'>
              <img src="../images/logo.svg" alt="logo" />
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
        {result && !playAgain && <FourthLayout userChoice={userChoice} compChoice={compChoice} handlePlayAgain={handlePlayAgain}/>}
        {showMainLayout && playAgain && <MainLayout handleUserChoice={handleUserChoice}/>}

        <div className='lg:hidden border border-white rounded-lg text-white self-center w-1/3 mt-24 lg:mt-4 mb-10 flex justify-center items-center'>
          <button aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
        </div>
      </div>

      <div className='hidden lg:flex self-end border border-white rounded-lg text-white w-1/12 mt-2 lg:mt-16 mb-10 mr-14 justify-center items-center'>
        <button aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
      </div>
    </div>
  );
};

export default Layout;
