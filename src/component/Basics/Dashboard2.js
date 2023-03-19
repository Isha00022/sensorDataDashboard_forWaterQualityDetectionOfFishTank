import React from "react";
import "./styleDashboard.css";
import Progresser from "./Progresser";

const Dashboard2 = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="cards">
            <div className="card">
              <Progresser />
            </div>
            <div className="card">
              <Progresser />
            </div>
            <div className="card">
              <Progresser />
            </div>
            <div className="card">
              <Progresser />
            </div>
            <div className="card">
              <Progresser />
            </div>
            <div className="card">
              <Progresser />
            </div>
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
                fontSize:15,
                borderColor:"#7f56d9",
              }}
            >
              Check Suitability
            </button>
            {/* <button>Get Report</button> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard2;
