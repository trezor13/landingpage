import React from 'react';

function Partners(props) {
  return (
    <div className="h-full">
      <h2 className="text-center text-semibold text-[28px] py-[2.5%]">
        Partners
      </h2>
      <div className="flex flex-wrap w-[100%] justify-between pb-[2.5%]">
        <img className="w-1/7" src="/adv5-ptn1.png" alt="partner" />
        <img className="w-1/7" src="/partner2.png" alt="partner" />
        <img className="w-1/7" src="/partner3.png" alt="partner" />
        <img className="w-1/7" src="/partner4.png" alt="partner" />
        <img className="w-1/7" src="/partner5.png" alt="partner" />
        <img className="w-1/7" src="/partner6.png" alt="partner" />
        <img className="w-1/7" src="/partner7.png" alt="partner" />
      </div>
    </div>
  );
}

export default Partners;
