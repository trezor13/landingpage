import React from 'react';
import { Image } from 'next/image';

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-[1%] z-50">
      <img src="/logo.png" alt="logo" />
      <div className="flex w-[30%] justify-between align-center font-medium ">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Team</a>
        <a href="#">About Us</a>
      </div>
      <button className="border-white rounded-3xl border-[1px] w-max px-[20px] py-[7px] cursor-pointer">
        Join as an investor
      </button>
    </div>
  );
};

export default Header;
