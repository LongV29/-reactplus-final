import React, { useEffect, useState } from "react";
import Header from "../layout/defaultLayout";
import { images } from "../../assets/index";
import "./dashboard.scss";
import { Link } from "react-router-dom";
import { getTaskList } from "../../service/User";

function DashBoard(props) {
  const [tasksList, setTaskList] = useState([]);
  useEffect(() => {
    getTaskList().then((res) => {
      setTaskList(res.data);
    });
  }, []);
  return (
    <div className="dashboard">
      <Header />
      <div className="avatar">
        <img src={images.avatar} alt="error" />
        <h1 className="name">Monica Gamage</h1>
        <h3 className="email">@monicagamage</h3>
        <button className="log-out">
          <Link to="/login">Log Out</Link>
        </button>
      </div>
      <div className="dash">
        <img src={images.clock} alt="error" className="clock"/>
        <h4>Good Afternoon</h4>
        <h2>Tasks List</h2>
        <div className="list">
          <div className="list-dash">
            <div className="list-dash_left">Tasks List</div>
            <div className="list-dash_right">
              <img src={images.vector} alt="error" />
            </div>
          </div>
          <div className="list-work">
            {tasksList.map((item, index) =>
              item.completed ? (
                <div className="completed" key={index}>
                  <img src={images.cirle} alt="error" />
                  <div>{item.name}</div>
                </div>
              ) : (
                <div key={index} className="uncompleted">
                  <img src={images.squrare} alt="error" />
                  <div>{item.name}</div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
