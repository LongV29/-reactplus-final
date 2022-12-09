import React from "react";
import Header from "../layout/defaultLayout/index";
import ContainerLayout from "../layout/containerLayout";
import { h2tag, h1tag, ptag } from "../layout/containerLayout/dataContainer";
import "./home.scss";
import { Link } from "react-router-dom";
import { images } from "../../assets";
function Home(props) {
  return (
    <div className="homePage">
      <Header />
      <ContainerLayout
        title1={h2tag.homeTag}
        title2={h1tag.homeTag}
        title3={ptag.homeTag}
      />
      <div className="home-footer">
        <button className="home-button" type="submit">
          <Link to="/register">
            Get Start
            <img src={images.arrow} alt="error" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
