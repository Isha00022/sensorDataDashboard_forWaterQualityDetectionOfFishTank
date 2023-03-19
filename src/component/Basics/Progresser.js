import React, { useEffect, useState } from "react";
import "./style.css";
import { Line, Circle } from "rc-progress";

const Progresser = () => {
  const [percentage, setPercentage] = useState(30);
  return (
    <>
      <div className="outer">
        <div style={{ height: 180, width: 180 }}>
          <Circle
            percent={percentage}
            strokeColor="#7F56D9"
            strokeWidth={7}
            trailColor="#F9F5FF"
            trailWidth={7}
            //gapDegree={20}
            //gapPosition='left'
          />
          <div className="info">
            <p style={{color:"#828080"}}>Temperature</p><br/><p style={{marginTop:1}}>34</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progresser;
