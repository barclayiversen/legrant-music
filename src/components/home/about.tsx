import React, { useState, useEffect } from "react";
import axios from "axios";

const About: React.FC = () => {
  const [aboutContent, setAboutContent] = useState<string>("");

  // useEffect(() => {
  //   // Fetch the content using Axios from the /api/about endpoint
  //   axios
  //     .get("/api/about")
  //     .then((response) => {
  //       // Set the fetched content in state

  //       const content = response.data;
  //       setAboutContent(content);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching content:", error);
  //     });
  // }, []);

  return (
    <div
      id="content"
      className="text-white bg-black w-full mx-auto text-center p-10"
    >
      <p className="text-xl">
        Legend has it that Legrant was born from a bass drop so potent, it sent
        shockwaves through the annals of Bristol's storied music scene,
        heralding the arrival of a prodigious talent. From the tender age of a
        mere sapling, Legrant, equipped with nothing but a pair of borrowed
        headphones and an unyielding resolve, embarked on a quixotic quest to
        redefine the contours of the San Francisco music scene.
      </p>
    </div>
  );
};

export default About;
