import React from 'react';

const Interest = ({ icon, title }) => {
  return (
    <div className="w-1/6 p-4 text-center">
      <div className="w-16 h-16 rounded-full mx-auto border border-white p-2 flex justify-center items-center">
        <img
          src={icon}
          alt={title}
          className="w-[80%] h-[80%] object-contain rounded-full"
        />
      </div>
      <p className="mt-2 font-semibold">{title}</p>
    </div>
  );
};

export default Interest;
