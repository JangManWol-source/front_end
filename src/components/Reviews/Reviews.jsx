import React from "react";

const Reviews = () => {
  return (
    <div name="BLOG" className="flex justify-center p-4">
      <div className=" w-11/12 lg:w-3/4 ">
        <div className="flex flex-row items-start justify-start">
          <div className="h-line bg-salmon w-10 mr-5"></div>
          <div className="text-salmon text-default">RAVING REVIEWS</div>
        </div>
        <div className="font-logo text-sm text-dark-late-gray">
          Working with The Studio completely transformed the content for my
          business! Loved working with them.
          <br />
          <span className="italic">- Joe Cristian Jamis</span>
        </div>
        <div className="w-full text-white text-center font-logo text-xs font-light leading-3">
          <div className="bg-salmon p-10 mt-5">
            <div>Stay In The Know</div>
            <br />
            <div className="text-default font-sans">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              corrupti quaerat tenetur harum nihil quis assumenda quia
              similique, maiores enim maxime dolores ut reiciendis nemo? Ullam
              molestias delectus ipsam eveniet.
            </div>
            <form className="text-default font-sans w-full">
              <input
                type="text"
                placeholder="First name"
                className="p-1 m-1 rounded-sm outline-none border-none text-black"
              />
              <input
                type="text"
                placeholder="Last name"
                className="p-1 m-1 rounded-sm outline-none border-none text-black"
              />
              <input
                type="text"
                placeholder="Email address"
                className="p-1 m-1 rounded-sm outline-none border-none text-black"
              />
              <button className="bg-black/90 p-1 rounded-sm text-default font-sans font-semibold text-white/90">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
