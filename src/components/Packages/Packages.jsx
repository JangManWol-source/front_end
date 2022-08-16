import React from "react";
import PlusButton from "../extracted/PlusButton";
import Title from "../extracted/Title";
import Images from "./Images";
const Packages = () => {
  return (
    <div name="SHOP" className="w-full flex justify-center p-4 bg-milk">
      <div className="flex md:w-1/2 w-full flex-row-reverse justify-center">
        <div className="flex-1 text-dark-late-gray h-full pr-5 pl-5">
          <Title title="OUR PACKAGES" />
          <div className="font-logo">
            Just Starting Out Or Long Time Business Owner? We've Got You
            Covered!
          </div>
          <PlusButton text="EXPLORE THE PACKAGES" className="text-salmon" />
        </div>
        <Images />
      </div>
    </div>
  );
};

export default Packages;
