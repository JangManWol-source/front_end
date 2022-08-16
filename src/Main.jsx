import React from "react";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import TitleHeader from "./components/Headers/TitleHeader";
import Nav from "./components/Nav/Nav";
import Packages from "./components/Packages/Packages";
import Reviews from "./components/Reviews/Reviews";
const Main = () => {
  return (
    <div>
      <Nav />
      <TitleHeader
        title="BRAND BIO"
        subtitle1="Delivering"
        italic1="Captivating"
        subtitle2="Content For"
        italic2="Memorable"
        extras="Brands"
        haveButton={false}
      />
      <About />
      <Packages />
      <Reviews />
      <TitleHeader
        title="CALL TO ACTION"
        subtitle1="Elevate"
        italic1="Your"
        subtitle2="Business With"
        italic2="Captivating"
        extras="Content Today"
        button="LETS WORK TOGETHER"
        haveButton={true}
      />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Main;
