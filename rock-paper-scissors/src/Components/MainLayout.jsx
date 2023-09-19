import React from 'react';

const MainLayout = ({handleUserChoice}) => {
    
    return (
        <>
            <main className='mt-36 relative self-center w-full sm:w-1/2'>

                <div className='relative z-30 flex justify-center h-44 lg:h-64'>
                    <img src="../images/bg-triangle.svg" alt="triangle" />
                </div>

                <div className='absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-full lg:w-10/12 xl:w-8/12 2xl:w-7/12'>
                    <div className='flex place-content-between w-full'>

                        <div className="bg-white h-32 w-32 md:h-36 md:w-36 lg:h-44 lg:w-44 flex justify-center items-center rounded-full border-paper border-[20px]" style={{ zIndex: 1000 }}>
                            <button id='paper' onClick={() => handleUserChoice("Paper")} aria-label='paper'><img src="../images/icon-paper.svg" alt="paper" /></button>
                        </div>

                        <div className="bg-white h-32 w-32 md:h-36 md:w-36 lg:h-44 lg:w-44 flex justify-center items-center rounded-full border-scissors border-[20px]" style={{ zIndex: 1000 }}>
                            <button id='scissors' onClick={() => handleUserChoice("Scissors")} aria-label='scissors'><img src="../images/icon-scissors.svg" alt="scissors" /></button>
                        </div>

                    </div>

                    <div className='flex justify-center mt-11 lg:mt-16'>

                        <div className='bg-white h-32 w-32 md:h-36 md:w-36 lg:h-44 lg:w-44 flex justify-center items-center rounded-full border-rock border-[20px]' style={{ zIndex: 1000 }}>
                            <button id='rock' onClick={() => handleUserChoice("Rock")} aria-label='rock'><img src="../images/icon-rock.svg" alt="rock" /></button>
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}

export default MainLayout