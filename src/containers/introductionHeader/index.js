import "./introduction.css";
import "./../../App.css";
import React from "react";

const IntroHeader = () => {
  return (
    <div className="Intro-header">
      <h1>Welcome to Hannes Hepner's Cognitive Reappraisal Test!</h1>
      <p></p>
      You will be presented with a number of images. Follow the instructions
      given and your responses will be recorded.
      <p></p>
      Once the exam is finished please wait and notify the examiner so they can
      download the results.
    </div>
  );
};

export default IntroHeader;
