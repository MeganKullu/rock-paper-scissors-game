
import React from 'react';

const Paper = () => {
  return (
    <div className="bg-white h-36 w-36 md:h-48 md:w-48 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border-paper border-[20px]" style={{ zIndex: 1000 }}>
      <button id='paper' aria-label='paper'><img src="../images/icon-paper.svg" alt="paper" className='lg:h-28' /></button>
    </div>
  )
}

const Rock = () => {
  return (
    <div className="bg-white h-36 w-36 md:h-48 md:w-48 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border-rock border-[20px]" style={{ zIndex: 1000 }}>
      <button id='rock' aria-label='paper'><img src="../images/icon-rock.svg" alt="rock" className='lg:h-28' /></button>
    </div>
  )
}

const Scissors = () => {
  return (
    <div className="bg-white h-36 w-36 md:h-48 md:w-48 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border-scissors border-[20px]" style={{ zIndex: 1000 }}>
      <button id='scissors' aria-label='paper' ><img src="../images/icon-scissors.svg" alt="scissors" className='lg:h-28' /></button>
    </div>
  )
}

const FourthLayout = ({ compChoice, userChoice, handlePlayAgain }) => {
  let userWins = false;

  if (
    (userChoice === "Rock" && compChoice === "Scissors") ||
    (userChoice === "Paper" && compChoice === "Rock") ||
    (userChoice === "Scissors" && compChoice === "Paper")
  ) {
    userWins = true;
  }


  return (
    <div className='flex text-white text-center w-full tracking-widest mt-16 text-lg justify-center items-center'>
      <div className='flex-col lg:flex place-content-between lg:w-full justify-center items-center'>
        <div className='flex gap-10 lg:flex items-center'>
          <div className=' flex tracking-widest items-center flex-col-reverse lg:flex-col'>
            <div className='mt-8 lg:mb-14'>YOU PICKED</div>
            {userChoice === "Rock" && <Rock />}
            {userChoice === "Paper" && <Paper />}
            {userChoice === "Scissors" && <Scissors />}
          </div>

          <div className='hidden lg:flex flex-col w-full mt-20'>
            <div className='font-bold text-6xl mb-4'>{userWins ? "YOU WIN" : userChoice === compChoice ? "IT'S A DRAW" : "YOU LOSE"}</div>
            <button onClick={handlePlayAgain} className=' tracking-widest bg-white px-4 py-3 rounded-lg text-dark-text text-base  hover:text-red-500'>PLAY AGAIN</button>
          </div>

          <div className=' flex items-center flex-col-reverse lg:flex-col'>
            <div className='mt-8 lg:mb-14'>THE HOUSE PICKED</div>
            {compChoice === "Rock" && <Rock />}
            {compChoice === "Paper" && <Paper />}
            {compChoice === "Scissors" && <Scissors />}
          </div>
        </div>

        <div className='mt-10 flex flex-col lg:hidden justify-center items-center'>
          <div className='font-bold text-5xl'>{userWins ? "YOU WIN" : userChoice === compChoice ? "IT'S A DRAW" : "YOU LOSE"}</div>
          <button onClick={handlePlayAgain} className='tracking-widest bg-white px-16 py-2 lg:px-4 lg:py-3 rounded-lg text-dark-text text-base lg:text-base hover:text-red-500 mt-4'>PLAY AGAIN</button>
        </div>
      </div>
    </div>
  )
}

export default FourthLayout