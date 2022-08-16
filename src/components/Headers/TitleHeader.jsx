import React from "react";

const TitleHeader = (props) => {
  return (
    <div className="flex justify-start items-start bg-dark-late-gray pl-4 pr-4 pt-20 pb-20">
      <div className="flex justify-start h-10">
        <div className="h-line w-10 mt-1 bg-salmon"></div>
      </div>
      <div className="ml-2">
        <div className="text-default font-semibold text-salmon">
          {props.title}
        </div>
        <div className="text-white font-logo text-4xl">
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
  );
};

export default TitleHeader;
