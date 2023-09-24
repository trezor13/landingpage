import React from 'react';
import InterestsDetails from './InterestsDetails';
import Interest from './Interest';

function InterestsSection() {
  return (
    <div className="flex flex-col ">
      <h1 className="title my-[3.5%] text-center">What are we looking for?</h1>
      <div className="flex flex-wrap h-[70vh]">
        {InterestsDetails.map((interest) => (
          <Interest
            key={interest.id}
            icon={interest.img}
            title={interest.title}
          />
        ))}
      </div>
    </div>
  );
}

export default InterestsSection;
