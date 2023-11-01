import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "FrontEnd Developer",
          "React js Developer",
          "Next js Developer",
          "Deep Learning Engineer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      styel
    />
  );
}

export default Type;
