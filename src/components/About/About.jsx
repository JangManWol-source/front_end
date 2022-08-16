import React from "react";
import Title from "../extracted/Title";
import leaf from "../../assets/leaf.jpeg";
import PlusButton from "../extracted/PlusButton";
const About = () => {
  const list = [
    {
      name: "Brand Strategy",
      id: Math.random().toString(30).substring(2, 9),
    },
    {
      name: "Art Direction",
      id: Math.random().toString(30).substring(2, 9),
    },
    {
      name: "Copywriting",
      id: Math.random().toString(30).substring(2, 9),
    },
    {
      name: "Digital Marketing",
      id: Math.random().toString(30).substring(2, 9),
    },
    {
      name: "Photography",
      id: Math.random().toString(30).substring(2, 9),
    },
    {
      name: "Design",
      id: Math.random().toString(30).substring(2, 9),
    },
  ];
  return (
    <div name="ABOUT" className="w-full relative flex justify-center p-4">
      <div className="flex w-11/12 lg:w-3/4 static">
        <div className="flex-1">
          <Title title="LOREM IPSUM" />
          <br />
          {list.map((each) => (
            <div className="font-logo text-dark-late-gray" key={each.id}>
              - {each.name}
            </div>
          ))}

          <div>
            <PlusButton text="MORE" />
          </div>
        </div>

        <div className="flex-1 w-full justify-end flex static">
          <div className="bg-salmon h-full w-32 relative flex items-center">
            <img src={leaf} alt="" className="absolute h-1/2 -left-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
