import React from "react";
import "./OutputPage.css";
import { useNavigate } from "react-router-dom";

const OutputPage = () => {
  const navigate = useNavigate();
  const navigateTohome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="border">
        <h1>This water is GOOD FOR USE</h1>
      </div>
      <div className="bottom">
        <button
          style={{
            height: 81,
            width: 182,
            left: 664,
            top: 86,
            borderRadius: 10,
            paddingRight: 13,
            paddingLeft: 13,
            paddingTop: 20,
            paddingBottom: 20,
            color: "#7f56d9",
            fontSize: 15,
            borderColor: "#7f56d9",
          }}
          onClick={navigateTohome}
        >
          Show Sensor Values
        </button>
        {/* <button>Get Report</button> */}
      </div>
    </>
  );
};

export default OutputPage;
