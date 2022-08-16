import React from "react";
import Container from "../extracted/Container";
import PlusButton from "../extracted/PlusButton";
import Title from "../extracted/Title";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
const Packages = () => {
  return (
    <div name="SHOP" className="w-full flex justify-center p-4 bg-milk">
      <div className="flex w-11/12 lg:w-3/4 flex-row-reverse justify-center">
        <div className="flex-1 text-dark-late-gray h-full pr-5 pl-5">
          <Title title="OUR PACKAGES" />
          <div className="font-logo">
            Just Starting Out Or Long Time Business Owner? We've Got You
            Covered!
          </div>
          <PlusButton text="EXPLORE THE PACKAGES" />
        </div>

        {/* grid1 */}
        <div className="flex-2 flex">
          <div className="p-1">
            <div className="flex flex-col">
              <Container
                title="New Business Owner Package"
                className="h-3/4 p-5"
              />
              <div className="mt-1">
                <img src={book1} alt="" className="h-36 w-full object-cover" />
              </div>
            </div>
          </div>

          {/* grid2 */}
          <div className="p-1">
            <div className="flex flex-col-reverse">
              <Container
                title="Elite Business Package"
                className="h-3/4 p-5 bg-dark-late-gray"
              />
              <div className="mb-1">
                <img src={book2} alt="" className="h-36 w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
