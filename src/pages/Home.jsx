import React from 'react';
import { ButtonChoose } from '../components/ButtonChoose';

const Home = () => {
  return (
    <section className="w-full h-auto flex flex-col justify-center items-center mt-2">
        <p className="w-4/5 h-auto text-white font-dosis text-center font-normal text-l">
            Welcome! Discover new songs, albums or artists for you to listen.<br/><br/>
        
            <b>Easy to use, great to discover.</b>
        </p>
        <h2 className="text-green font-dosis text-center font-semibold text-2xl mt-8 mb-6">Please choose an option:</h2>
        <ButtonChoose />
    </section>
  )
}

export {Home}