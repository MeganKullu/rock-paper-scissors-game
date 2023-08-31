import React from 'react';

const Paper = () => {
    return (
        <div className="bg-white h-36 w-36 md:h-48 md:w-48 flex justify-center items-center rounded-full border-paper border-[20px]" style={{ zIndex: 1000 }}>
            <button id='paper' aria-label='paper'><img src="../images/icon-paper.svg" alt="paper" /></button>
        </div>
    )
}

const Rock = () => {
    return (
        <div className="bg-white h-36 w-36 md:h-48 md:w-48 flex justify-center items-center rounded-full border-paper border-[20px]" style={{ zIndex: 1000 }}>
            <button id='rock' aria-label='paper'><img src="../images/icon-rock.svg" alt="rock" /></button>
        </div>
    )
}

const Scissors = () => {
    return (
        <div className="bg-white h-36 w-36 md:h-48 md:w-48 flex justify-center items-center rounded-full border-paper border-[20px]" style={{ zIndex: 1000 }}>
            <button id='scissors' aria-label='paper'><img src="../images/icon-scissors.svg" alt="scissors" /></button>
        </div>
    )
}

const SecondLayout = ({ userChoice }) => {

    return (
        <div className='flex'>
            <div className='flex flex-col mb-14'>
                <div>YOU PICKED</div>
                {userChoice === "Rock" && <Rock/>}
                {userChoice === "Paper" && <Paper/>}
                {userChoice === "Scissors" && <Scissors/>}
            </div>
            <div className='flex flex-col mb-14'>
                <div>THE HOUSE PICKED</div>
                <div></div>

            </div>
        </div>
    )
}

export default SecondLayout