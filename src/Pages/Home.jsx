import React from "react";
import Main_Banner from "../Components/Main_Banner";
import Social_Banner from "../Components/Social_Banner";
import Contact_Form from "../Components/Contact_Form";
import Layouts from "../Components/Layouts";
import Apps from "../Components/Apps";
import Apps_Other_Pages from "../Components/Apps_Other_Pages";
import Customization from "../Components/Customization";
import Customization_Menu from "../Components/Customization_Menu";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <Main_Banner />
      <Social_Banner />
      <Layouts />
      <Apps />
      <Apps_Other_Pages />
      <Customization />
      <Customization_Menu />
      <Features />
      <Testimonials />
      <Contact_Form />
    </>
  );
};

export default Home;
