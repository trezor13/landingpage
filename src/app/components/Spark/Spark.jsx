import React from 'react';

function Spark(props) {
  return (
    <div className="h-[80vh] bg-[url('/trees.png')] px-[3.5%] py-[2.5%] relative overflow-y-hidden inner-shadow">
      <div className="w-[90%] flex flex-col items-center my-[5%] pt-[5%] ml-[5%]">
        <h2 className="text-center w-[95%] text-[56px] font-bold">
          Spark <span className="text-[#31dddd]">Regenerative Finance</span> 🌱
        </h2>
        <p className='font-semibold'>Join ReFi starter's sustainable investment revolution. Let's create a greener financial future together!</p>
        <div className="w-[60%] flex justify-evenly pt-[5%]">
          <button className="rounded-3xl w-[45%] bg-[#ffffff] text-black py-[7px] cursor-pointer font-semibold">
            Sustainable investment
          </button>
          <button className="rounded-3xl w-[45%] bg-[#ffffff] text-black py-[7px] cursor-pointer font-semibold">
            Launch Your Idea
          </button>
        </div>
      </div>
      <img
        src="/trees-light1.png"
        alt="trees-light"
        className="absolute top-[2%] left-[-15%] z-10 "
      />
    </div>
  );
}

export default Spark;
