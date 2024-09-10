import React from 'react';

function Hero() {
  return (
    <header className="h-[65vh] mt-[5.4rem] flex justify-center items-center text-center px-10 ">
      <div className ="my_fixed_width_2">
        <small>Ring Ring 🔔 Let's quit that habit ✅</small>
        <h1 className="text-4xl font-[800] my-2">Master Your <span className="text-[#3572EF] my_fixed_width">Habits</span>, Master Your <span className="text-[#3572EF]">Life</span>.</h1>
        <p className="text-base my-2">StreakMaster helps you build lasting habits and achieve your goals through consistent effort and motivation.</p>
        <a href="#" className="inline-flex items-center justify-between bg-gray-300 px-5 py-3 rounded-3xl text-[0.78rem] font-bold w-[8.5rem] text-black my-3">
          <span>Get Started</span>
          <span className="material-icons text-[1rem]">open_in_new</span>
          </a>
      </div>
    </header>
  );
}

export default Hero;
