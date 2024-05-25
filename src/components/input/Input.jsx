import React from 'react'
import right_arrow from '../../assets/svg/icon-arrow.svg'

const Input = () => {
  return (
    <div className='relative'>
      <button className='absolute right-0 top-0 bottom-0 py-4 px-6 bg-black rounded-tr-xl rounded-br-xl'>
        <img src={right_arrow} alt="right-arrow" />
      </button>
      <input className='focus:outline-none font-[rubik-400] py-4 px-6 w-full rounded-xl shadow-lg' type="text" placeholder='Search for any IP address or domain'/>
    </div>
  )
}

export default Input
