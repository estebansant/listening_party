import React from 'react';
import heart from "../assets/icons/heart.svg";

const Footer = () => {
  return (
    <section className="h-20 w-full flex justify-around items-center bg-dark-green mt-auto">
      <div>
        <p className="text-white font-dosis text-base">Using <a href="https://developer.spotify.com/" target="_blank" rel="noopener noreferrer" className="hover:underline visited:blue">Spotify API</a> <br/>
        
        <a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noopener noreferrer" className="hover:underline visited:blue">See documentation</a></p>
        
      </div>
      <div className="w-auto h-auto flex justify-center items-end">
        <p className="float-left text-right text-white font-dosis text-base" >Developed with love,  <br />by <a href="https://estebansant.com/" target="_blank" rel="noopener noreferrer" className="hover:underline visited:blue">Esteban Santiago</a></p> <img src={heart} className="w-6 h-6 float-right ml-2"/>
      </div>
    </section>
  )
}

export {Footer}