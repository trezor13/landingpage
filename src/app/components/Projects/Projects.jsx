import React from 'react';

function Projects(props) {
  return (
    <div>
      <h1 className="title my-[3.5%] text-center">Projects</h1>
      <div className="flex justify-evenly h-[70vh]">
        <div className="h-[80%] w-[35%]">
          <img
            src="/project1.png"
            alt="project-one"
            className="h-[95%] w-[100%]"
          />
          <h1 className="text-center">WFF</h1>
        </div>
        <div className="h-[80%] w-[35%]">
          <img
            src="/project2.png"
            alt="project-two"
            className="h-[95%] w-[100%] mb-[3%]"
          />
          <div className="flex w-[50%] justify-between ml-[50%]">
            <div className="h-[5px] w-[30%] bg-[#31dddd]"></div>
            <div className="h-[5px] w-[30%] bg-[gray]"></div>
            <div className="h-[5px] w-[30%] bg-[gray]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
