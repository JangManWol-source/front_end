import React from "react";

const TitleHeader = (props) => {
  return (
    <div className="bg-dark-late-gray w-full lg:p-14 pr-2 pl-2 pt-10 pb-10 flex justify-center ">
      <div className="flex md:w-1/2 w-11/12 relative">
        <div className="h-line bg-salmon w-16 absolute -left-16"></div>
        <div className="ml-2">
          <div className="text-default font-semibold text-salmon">
            {props.title}
          </div>
          <div className="text-white font-logo text-4xl w-full">
            {props.subtitle1} <span className="italic">{props.italic1}</span>{" "}
            {props.subtitle2} <span className="italic">{props.italic2}</span>{" "}
            {props.extras}
          </div>
          <button
            className={`${
              props.haveButton ? "flex" : "hidden"
            } mt-4 p-1 text-white text-default rounded-sm bg-salmon`}
          >
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
