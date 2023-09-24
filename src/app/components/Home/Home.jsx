import React from 'react';
import Header from '../Header/Header';

function Home(props) {
  return (
    <div className="h-[98vh] bg-[url('/home-bg.png')] px-[3.5%] overflow-hidden">
      <Header />
      <div className="w-[50%] flex flex-col items-center mt-[15%] ml-[25%] z-20">
        <h2 className="title text-center w-[95%]">
          Empowering Web3 ReFi Projects for a Sustainable Future
        </h2>
        <div className="w-[60%] flex justify-evenly pt-[5%]">
          <button className="rounded-3xl w-[45%] bg-[#31dddd] py-[7px] cursor-pointer font-semibold">
            Invest Now
          </button>
          <button className="rounded-3xl w-[45%] bg-[#ffffff] text-black py-[7px] cursor-pointer font-semibold">
            Submit Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
