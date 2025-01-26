import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div style={{ overflow: 'hidden' }} className='w-full flex items-center justify-center min-h-screen'>
      <div className='container bg-gray-900 opacity-90 border rounded-3xl flex flex-col gap-8 border-gray-700 text-white px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20 max-w-6xl'>
        <h2 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-center'>
          <span className='text-red-700'>AZF</span>lix.az-a Xoş Gəlmisiniz!
        </h2>
        <p className='text-base sm:text-lg lg:text-xl text-gray-300 text-center'>
          AZFlix.az-da film dünyasına səyahət edin! Burada ən son filmlər, məşhur janrlar, aktyor heyəti və rejissorlar haqqında ətraflı məlumat əldə edə bilərsiniz.
        </p>

        <div className='flex justify-center'>
          <Link
            className='moviesBtn bg-red-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-800 transition duration-300'
            to='/movies'
          >
            Film axtar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
