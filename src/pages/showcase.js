import React from "react";
import ShowcaseComponent from "../components/ShowcaseComponent";
import Navbar from "../components/Navbar";

const Showcase = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ShowcaseComponent />
    </div>
  );
};

export default Showcase;
