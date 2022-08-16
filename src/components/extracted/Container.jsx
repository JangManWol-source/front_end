import React from "react";
import PlusButton from "./PlusButton";

const Container = (props) => {
  return (
    <div
      className={`flex items-center flex-col justify-center text-default bg-salmon p-4 text-white ${props.className}`}
    >
      <span className="font-cursive text-sm"> {props.title}</span>
      <PlusButton text="CHECK IT OUT" className="text-white text-default" />
    </div>
  );
};

export default Container;
