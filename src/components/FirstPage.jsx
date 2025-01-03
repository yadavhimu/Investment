import React from 'react'

const FirstPage = () => {
  return (
    <div>
      <div>
        <div className='bg-blue-950 mt-10 w-64 p-1 rounded-3xl'>
            <div className='flex justify-end text-white font-medium h-16 items-center text-2xl p-2 bg-blue-500 rounded-3xl ml-10 '  >
                <p>Welcome Aboard</p>
            </div>
        </div>
        <div className='lg:flex mt-10'>
            <div className='w-full mt-10'>
                <p className='text-8xl font-bold'>Invest Like a </p>
                <p  className='text-8xl font-bold mt-1'>Pro Today!</p>
                <p className='text-3xl mt-8'>Join the investment revolution and watch your money grow!</p>
            </div>
            <div className='w-full'>
                <img className='rounded-3xl' src="./images/bitcoin.jpeg" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
