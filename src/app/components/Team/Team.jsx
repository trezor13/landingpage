import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Team(props) {
  return (
    <div>
      <h2 className="text-center w-[95%] text-[36px] font-semibold pt-[4.5%]">
          Team
      </h2>
      <div className="flex flex-wrap h-[70vh] justify-between">
        <div className="w-1/5 py-4 text-center h-[80%] bg-[#202124] rounded-lg my-[5%] flex flex-col items-center">
          <div className="h-[120px] w-[120px] bg-[white] rounded-[50%] mt-[5%]"></div>
          <h2 className="font-semibold text-[30px] text-[rgba(49,221,221,1)]">
            OSCAR ANDRADE
          </h2>
          <p className="mt-2 font-semibold ">Tokenomics.</p>
          <div className="bg-[#83c543] w-[100%] mt-[10%] h-[7.5%] flex px-[30%] self-center justify-between">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaTwitter className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="w-1/5 py-4 text-center h-[80%] bg-[#202124] rounded-lg my-[5%] flex flex-col items-center">
          <div className="h-[120px] w-[120px] bg-[white] rounded-[50%] mt-[5%]"></div>
          <h2 className="font-semibold text-[30px] text-[rgba(49,221,221,1)]">
            OSCAR ANDRADE
          </h2>
          <p className="mt-2 font-semibold ">Tokenomics.</p>
          <div className="bg-[#83c543] w-[100%] mt-[10%] h-[7.5%] flex px-[30%] self-center justify-between">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaTwitter className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="w-1/5 py-4 text-center h-[80%] bg-[#202124] rounded-lg my-[5%] flex flex-col items-center">
          <div className="h-[120px] w-[120px] bg-[white] rounded-[50%] mt-[5%]"></div>
          <h2 className="font-semibold text-[30px] text-[rgba(49,221,221,1)]">
            OSCAR ANDRADE
          </h2>
          <p className="mt-2 font-semibold ">Tokenomics.</p>
          <div className="bg-[#83c543] w-[100%] mt-[10%] h-[7.5%] flex px-[30%] self-center justify-between">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaTwitter className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="w-1/5 py-4 text-center h-[80%] bg-[#202124] rounded-lg my-[5%] flex flex-col items-center">
          <div className="h-[120px] w-[120px] bg-[white] rounded-[50%] mt-[5%]"></div>
          <h2 className="font-semibold text-[30px] text-[rgba(49,221,221,1)]">
            OSCAR ANDRADE
          </h2>
          <p className="mt-2 font-semibold ">Tokenomics.</p>
          <div className="bg-[#83c543] w-[100%] mt-[10%] h-[7.5%] flex px-[30%] self-center justify-between">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaTwitter className="text-2xl cursor-pointer" />
            <FaLinkedin className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
