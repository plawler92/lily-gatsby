import React from "react";
import LilyProfile from "../images/LilyProfile5.jpg";

const About = () => {
  return (
    <div className="flex flex-row">
      <img className="rounded-full h-64 w-64" src={LilyProfile} />
      <div className="ml-4">
        <h1>Hello,</h1>
        <h3>A bit about me:</h3>
        <p>
          This is an about paragraph. It will be filled out eventually. Really
          any moment know inspiration will strike and I will put something in
          here that is not a placeholder. Maybe that lorem ipsum stuff.
        </p>
      </div>
    </div>
  );
};

export default About