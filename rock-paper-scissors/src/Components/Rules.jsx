import React from 'react'

const Rules = ({handleCloseRules}) => {
    return (
        <>
            <div className='hidden lg:flex flex-col absolute h-1/2 bg-white rounded-lg z-[10000] p-6'>
                <div className='flex place-content-between'>
                    <p className='text-radial text-2xl font-bold mb-2'>RULES</p>
                    <button onClick={() => handleCloseRules()} className='h-8 w-8'><img src="/images/close-svgrepo-com.svg" alt="close button" /></button>
                </div>
                <div className='flex justify-center'>
                    <img className="h-4/5 self-center" src="/images/image-rules.svg" alt="rules" />
                </div>

            </div>
            <div className='flex flex-col lg:hidden absolute h-1/2 bg-white rounded-lg z-[10000] p-6'>
                <div className='flex place-content-between'>
                    <p className='text-radial text-2xl font-bold'>RULES</p>
                    <button onClick={() => handleCloseRules()} className='h-8 w-8'><img src="/images/close-svgrepo-com.svg" alt="close button" /></button>
                </div>

                <div className='flex justify-center'>
                    <img className="h-4/5 self-center" src="/images/image-rules.svg" alt="rules" />
                </div>
            </div>

        </>
    )
}

export default Rules