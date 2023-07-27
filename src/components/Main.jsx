import React from "react";
import videoBG from "../assets/CEPBKG-Video.mp4";

const Main = () => {
  return (
    <div className="main">
      <video src={videoBG} autoPlay loop muted playsinline />
    </div>
  );
};

export default Main;
