import React from 'react'

const Paper = () => {
    return (
        <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-paper border-[16px]" style={{ zIndex: 1000 }}>
            <button id='paper' aria-label='paper'><img src="../images/icon-paper.svg" alt="paper" /></button>
        </div>
    )
}

const Rock = () => {
    <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-paper border-[16px]" style={{ zIndex: 1000 }}>
        <button id='rock' aria-label='paper'><img src="../images/icon-rock.svg" alt="rock" /></button>
    </div>
}

const Scissors = () => {
    <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-paper border-[16px]" style={{ zIndex: 1000 }}>
        <button id='scissors' aria-label='paper'><img src="../images/icon-scissors.svg" alt="scissors" /></button>
    </div>
}

const SecondLayout = () => {
    return (
        <div className='flex'>
            <div className='flex flex-col mb-14'>
                <div>YOU PICKED</div>
                <div></div>
            </div>
            <div className='flex flex-col mb-14'>
                <div>THE HOUSE PICKED</div>
                <div></div>

            </div>
        </div>
    )
}

export default SecondLayout