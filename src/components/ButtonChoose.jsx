import React from 'react'

const ButtonChoose = ({setPage}) => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-5 mb-20">
      <button
        className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black"
        onClick={() => setPage("songSearch")}
      >
        Get a Song
      </button>
      <button
        className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black"
        onClick={() => setPage("albumSearch")}
      >
        Get an Album
      </button>
      <button
        className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black"
        onClick={() => setPage("artistSearch")}
      >
        Get an Artist
      </button>
      <button
        className="w-44 h-auto p-2 text-2xl font-dosis font-semibold text-gray bg-dark-green rounded-md shadow-md2 transition transition-all duration-500 ease-in-out hover:bg-green hover:text-black"
        onClick={() => setPage("friendsSearch")}
      >
        Friend's favorite
      </button>
    </div>
  )
}

export {ButtonChoose}