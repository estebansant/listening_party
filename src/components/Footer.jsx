import React from 'react';
import heart from "../assets/icons/heart.svg";

const Footer = () => {
  return (
    <section className="h-20 w-full flex justify-around items-center bg-dark-green absolute z-40 bottom-0">
      <div>
        <p className="text-white">Using <a href="https://developer.spotify.com/" target="_blank" rel="noopener noreferrer" className="hover:underline visited:blue">Spotify API</a> <br/>
        
        <a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noopener noreferrer" className="hover:underline visited:blue">See documentation</a></p>
        
      </div>
      <div>
        <p className="float-left text-right text-white " >Developed with love, <img src={heart} className="w-6 h-6 float-right ml-1"/> <br />by <a href="https://estebansant.com/" target="_blank" rel="noopener noreferrer" className="hover:underline visited:blue">Esteban Santiago</a></p>
      </div>
    </section>
  )
}

export {Footer}