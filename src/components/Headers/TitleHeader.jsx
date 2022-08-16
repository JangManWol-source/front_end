import React from "react";

const TitleHeader = (props) => {
  return (
    <div className="bg-dark-late-gray lg:p-14 pr-2 pl-2 pt-10 pb-10">
      <div className="flex">
        <div className="h-line bg-salmon w-10"></div>
        <div className="ml-2">
          <div className="text-default font-semibold text-salmon">
            {props.title}
          </div>
          <div className="text-white font-logo text-4xl w-3/4">
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
