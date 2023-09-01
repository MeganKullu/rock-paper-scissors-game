
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

const ThirdLayout = ({ compChoice, userChoice }) => {

  return (
    <div className='flex text-white text-center w-full tracking-widest mt-16 text-lg items-center md:w-1/2'>
      <div className='basis-1/2 flex flex-col tracking-widest items-center'>
        <div className='mb-14'>YOU PICKED</div>
        {userChoice === "Rock" && <Rock />}
        {userChoice === "Paper" && <Paper />}
        {userChoice === "Scissors" && <Scissors />}
      </div>

      <div className='basis-1/2 flex flex-col items-center'>
        <div className='mb-14'>THE HOUSE PICKED</div>
        {compChoice === "Rock" && <Rock />}
        {compChoice === "Paper" && <Paper />}
        {compChoice === "Scissors" && <Scissors />}
      </div>
    </div>
  )
}


export default ThirdLayout