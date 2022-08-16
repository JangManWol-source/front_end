import React from "react";

const Title = (props) => {
  return (
    <div className="flex flex-col font-semibold">
      <div className="text-salmon text-default">{props.title}</div>
      <div className="h-line w-full bg-salmon mt-5"></div>
    </div>
  );
};

export default Title;
