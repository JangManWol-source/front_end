import React from "react";
import Container from "../extracted/Container";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
const Images = () => {
  return (
    <div className="w-full flex-1">
      <div className="grid grid-cols-2">
        <div>
          <Container title="New Business Owner Package" className="m-1" />
          <div className="m-1">
            <img src={book1} alt="" />
          </div>
        </div>

        <div className="flex flex-col-reverse">
          <Container
            title="New Business Owner Package"
            className="m-1 bg-dark-late-gray"
          />
          <div className="m-1">
            <img src={book2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
