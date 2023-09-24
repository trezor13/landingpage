import React from 'react';

function Advisors(props) {
  return (
    <div className="h-full">
      <h2 className="text-center text-semibold text-[28px] py-[2.5%]">Advisors</h2>
      <div className="flex flex-wrap w-[100%] justify-between">
        <img className="w-1/7" src="/advisor1.png" alt="advisor" />
        <img className="w-1/7" src="/advisor2.png" alt="advisor" />
        <img className="w-1/7" src="/advisor3.png" alt="advisor" />
        <img className="w-1/7" src="/advisor4.png" alt="advisor" />
        <img className="w-1/7" src="/adv5-ptn1.png" alt="advisor" />
        <img className="w-1/7" src="/advisor6.png" alt="advisor" />
      </div>
    </div>
  );
}

export default Advisors;
