import React from "react";
import "./App.css";



const BottomRow = (props) => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 onClick = {props.dwn} className="down__title">Down</h3>
        <div className="down__value">{props.down}</div>
      </div>
      <div className="toGo">
        <h3 onClick = {props.tg} className="toGo__title">To Go</h3>
        <div className="toGo__value">{props.togo}</div>
      </div>
      <div className="ballOn">
        <h3 onClick = {props.Bo} className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{props.ballOn}</div>
      </div>
      <div className="quarter">
        <h3 onClick = {props.qt} className="quarter__title">Quarter</h3>
        <div className="quarter__value">{props.quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
