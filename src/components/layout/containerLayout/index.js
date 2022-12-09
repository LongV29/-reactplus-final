import React from "react";
import { images } from "../../../assets";
import "./containerLayout.scss";
function ContainerLayout(props) {
  const { title1, title2, title3 } = props;
  return (
    <div className="home-container">
      <img src={images.Done} alt="error" />
      <div className="home-text">
        <h2>{title1}</h2>
        <h1>{title2}</h1>
        <p>{title3}</p>
      </div>
    </div>
  );
}

export default ContainerLayout;
