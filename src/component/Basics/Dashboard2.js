import React, { useEffect, useState } from "react";
import "./styleDashboard.css";
import Progresser from "./Progresser";
import {useNavigate} from 'react-router-dom';


const Dashboard2 = () => {
  const navigate = useNavigate();
  const navigateToOutputPage = () => {
    navigate('/OutputPage');
  };
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get", {
      method: "GET",
      headers: {
        "Content-Type": "applications/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setSensorData(resp))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="cards">
            {sensorData.map((data) => (
              <div className="card">
                <Progresser sensorData={data} />
              </div>
            ))}
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
              onClick={navigateToOutputPage}
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
