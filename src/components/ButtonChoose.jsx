import React from 'react'

const ButtonChoose = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5">
      <button className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black">Get a Song</button>
      <button className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black">Get an Album</button>
      <button className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black">Get an Artist</button>
      <button className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black">Friend's favorite</button>
    </div>
  )
}

export {ButtonChoose}