import React from 'react'

const MainLayout = () => {
    return (
        <div>
            <main className='mt-36 relative self-center'>

                <div className='relative z-30 flex justify-center h-44 w-80 lg:h-52 lg:w-96'>
                    <img src="../images/bg-triangle.svg" alt="triangle" />
                </div>

                <div className='absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                    <div className='flex place-content-between w-full'>

                        <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-paper border-[16px]" style={{ zIndex: 1000 }}>
                            <button id='paper' onClick={() => handleUserChoice("Paper")} aria-label='paper'><img src="../images/icon-paper.svg" alt="paper" /></button>
                        </div>

                        <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-scissors border-[16px]" style={{ zIndex: 1000 }}>
                            <button id='scissors' onClick={() => handleUserChoice("Scissors")} aria-label='scissors'><img src="../images/icon-scissors.svg" alt="scissors" /></button>
                        </div>

                    </div>

                    <div className='flex justify-center mt-6 lg:mt-11'>

                        <div className='bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-rock border-[16px]' style={{ zIndex: 1000 }}>
                            <button id='rock' onClick={() => handleUserChoice("Rock")} aria-label='rock'><img src="../images/icon-rock.svg" alt="rock" /></button>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default MainLayout