import React from 'react';
import arrowBack from '../assets/icons/arrowLeft.svg';

const Header = ({page, setPage}) => {
  return (
    <section className="w-full h-16 flex items-center justify-center mt-10 lg:mt-28">
      {(page === "songSearch" || page === "albumSearch" || page === "artistSearch" || page === "friendsSearch") && 
        <img
          className="w-4 h-4 absolute top-4 left-4 hover:cursor-pointer"
          onClick={() => setPage("chooseButtons")}
          src={arrowBack}
        />
      }
      <h1 className="font-bold text-5xl text-green drop-shadow-md text-center font-dosis">Listening Party</h1>
    </section>
  )
}

export {Header}