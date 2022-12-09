import React from "react";
import './header.scss';
import { images } from "../../../assets";
function Header(props) {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  return (
    <div className="home-header">
      <h5>{time}</h5>
      <img src={images.Notch} alt="error" className="home-header_img" />
      <img
        src={images.rightSide}
        alt="error"
        className="home-header_imgRight"
      />
    </div>
  );
}

export default Header;
