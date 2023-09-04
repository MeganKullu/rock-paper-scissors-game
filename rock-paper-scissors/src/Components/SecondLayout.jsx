import React from 'react';

const Paper = () => {
    return (
        <div className="bg-white h-36 w-36 md:h-48 md:w-48 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border-paper border-[20px] lg:border-[28px]" style={{ zIndex: 1000 }}>
            <button id='paper' aria-label='paper'><img src="../images/icon-paper.svg" alt="paper" className='lg:h-28' /></button>
        </div>
    )
}

const Rock = () => {
    return (
        <div className="bg-white h-36 w-36 md:h-48 md:w-48 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border-rock border-[20px] lg:border-[28px]" style={{ zIndex: 1000 }}>
            <button id='rock' aria-label='paper'><img src="../images/icon-rock.svg" alt="rock" className='lg:h-28' /></button>
        </div>
    )
}

const Scissors = () => {
    return (
        <div className="bg-white h-36 w-36 md:h-48 md:w-48 lg:w-64 lg:h-64 flex justify-center items-center rounded-full border-scissors border-[20px] lg:border-[28px]" style={{ zIndex: 1000 }}>
            <button id='scissors' aria-label='paper' ><img src="../images/icon-scissors.svg" alt="scissors"className='lg:h-28' /></button>
        </div>
    )
}

const SecondLayout = ({ userChoice }) => {

    return (
        <div className='flex text-white text-center w-full tracking-widest mt-16 text-lg items-center md:w-1/2'>
            <div className='basis-1/2 flex tracking-widest items-center flex-col-reverse lg:flex-col'>
                <div className='mt-8 lg:mb-14'>YOU PICKED</div>
                {userChoice === "Rock" && <Rock/>}
                {userChoice === "Paper" && <Paper/>}
                {userChoice === "Scissors" && <Scissors/>}
            </div>
            <div className='basis-1/2 flex items-center flex-col-reverse lg:flex-col'>
                <div className='mt-8 lg:mb-14'>THE HOUSE PICKED</div>
                <div className='bg-blue-950 rounded-full h-36 w-36 md:h-36 md:w-36 lg:w-64 lg:h-64'></div>       
            </div>
        </div>
    )
}

export default SecondLayout
