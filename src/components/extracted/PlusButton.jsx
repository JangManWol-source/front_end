import React from "react";

const PlusButton = (props) => {
  return (
    <button
      className={`${props.className}text-white text-default font-semibold`}
    >
      + {props.text}
    </button>
  );
};

export default PlusButton;
