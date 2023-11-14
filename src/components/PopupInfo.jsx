import React from "react";
import { Link } from "react-router-dom";
import InfoBox from "./InfoBox";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx5">
      Hii, I'm <span className="font-semibold">Anshuman</span>👋
      <br />
      fullstack developer | student based in India.
    </h1>
  ),
  2: (
    <InfoBox
      text="With 2 years of experience working within 2 organisations learned and developed many skills along the way"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Also worked with many various exciting projects, wanna know about them?"
      link="/projects"
      btnText="Visit my Portfolio!"
    />
  ),
  4: (
    <InfoBox
      text="Open to development opportunities and collaborations. Feel free to drop me a message, and let's make things happen!"
      link="/contact"
      btnText="Connect here"
    />
  ),
};

const PopupInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default PopupInfo;
