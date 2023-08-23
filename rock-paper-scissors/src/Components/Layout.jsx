import React from 'react';


const Layout = ({ score }) => {



  return (
    <div className='h-full'>
      <div className='flex flex-col bg-radial px-4 h-screen'>
        <article className='rounded-lg border-2 py-2 pl-4 pr-2 mt-6 flex w-full place-content-between '>

          <div className='h-16 w-24 flex justify-center items-center my-3'>
            <img src="../images/logo.svg" alt="" />
          </div>

          <div className='bg-white rounded-lg flex flex-col justify-center items-center w-28'>
            <p className='text-paper text-xs'>SCORE</p>
            <div className='text-dark-text text-4xl lg:ftext-6xl font-extrabold'>12</div>
          </div>

        </article>

        <main className='mt-36 relative'>

          <div className='relative z-30 flex justify-center '>
            <img src="../images/bg-triangle.svg" alt="" />
          </div>

          <div className='absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
            <div className='flex place-content-between w-full'>

              <div className="bg-white h-32 w-32 flex justify-center items-center rounded-full border-paper border-8 " style={{ zIndex: 1000 }}>
                <button aria-label='paper'><img src="../images/icon-paper.svg" alt="" /></button>
              </div>

              <div className="bg-white h-32 w-32 flex justify-center items-center rounded-full border-scissors border-8" style={{ zIndex: 1000 }}>
                <button aria-label='scissors'><img src="../images/icon-scissors.svg" alt="" /></button>
              </div>

            </div>

            <div className='flex justify-center mt-24'>

              <div className='bg-white h-32 w-32 flex justify-center items-center rounded-full border-rock border-8' style={{ zIndex: 1000 }}>
                <button aria-label='rock'><img src="../images/icon-rock.svg" alt="" /></button>
              </div>

            </div>
          </div>

        </main>

        <div className='border border-white rounded-lg text-white self-center w-1/3 mt-12 flex justify-center items-center'>
          <button aria-label="rules" className='text-center text-white px-5 py-2 tracking-widest'>RULES</button>
        </div>

      </div>
    </div>
  )
}

export default Layout