import React from 'react';


const Layout = ({ score }) => {

  return (
    <div className='bg-radial flex flex-col md:justify-center md:items-center'>
      <div className='flex flex-col  px-4 min-h-screen w-full md:w-1/2'>
        <article className='rounded-lg border-2 py-2 pl-4 pr-2 mt-6 flex w-full place-content-between'>

          <div className='h-16 w-24 flex justify-center items-center my-3'>
            <img src="../images/logo.svg" alt="logo"/>
          </div>

          <div className='bg-white rounded-lg flex flex-col justify-center items-center w-28'>
            <p className='text-paper text-xs'>SCORE</p>
            <div className='text-dark-text text-4xl lg:ftext-6xl font-extrabold'>12</div>
          </div>

        </article>

        <main className='mt-36 relative self-center'>

          <div className='relative z-30 flex justify-center h-44 w-80 lg:h-52 lg:w-96'>
            <img src="../images/bg-triangle.svg" alt="triangle" />
          </div>

          <div className='absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
            <div className='flex place-content-between w-full'>

              <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-paper border-[16px]" style={{ zIndex: 1000 }}>
                <button aria-label='paper'><img src="../images/icon-paper.svg" alt="paper"/></button>
              </div>

              <div className="bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-scissors border-[16px]" style={{ zIndex: 1000 }}>
                <button aria-label='scissors'><img src="../images/icon-scissors.svg" alt="scissors" /></button>
              </div>

            </div>

            <div className='flex justify-center mt-6 lg:mt-11'>

              <div className='bg-white h-32 w-32 md:h-36 md:w-36 flex justify-center items-center rounded-full border-rock border-[16px]' style={{ zIndex: 1000 }}>
                <button aria-label='rock'><img src="../images/icon-rock.svg" alt="rock" /></button>
              </div>

            </div>
          </div>

        </main>

        <div className='lg:hidden border border-white rounded-lg text-white self-center w-1/3 mt-32 mb-10 flex justify-center items-center'>
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