import React from "react";

const Contacts = () => {
  return (
    <div name="LET'S WORK TOGETHER" className="w-full bg-milk">
      <div className="w-full grid grid-cols-2 p-10">
        <div className="font-logo">
          Stay In <span className="italic">The Know</span>
          <br />
          <span className="text-default font-sans">
            Sign up with your email address to receive news and updates.
          </span>
          <br />
          <form>
            <div className="h-10">
              <input
                type="text"
                className="outline-none rounded-sm border-none text-default p-1 "
                placeholder="Email address"
              />
              <button className="text-default bg-salmon rounded-sm p-1 text-white font-sans ml-2">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
        <div className="font-logo leading-3 text-black/90">
          <span>
            <span className="italic">Connect</span> With Us
          </span>
          <br />
          <br />
          <span className="text-default font-sans leading-masikip">
            Follow along with our social media accounts. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Incidunt ea nobis laboriosam sunt
            error, vero repellendus vel molestias, dicta corporis, aliquid
            ratione consequatur est similique perspiciatis et quod repellat
            earum?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
