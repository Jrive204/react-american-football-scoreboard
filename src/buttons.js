import React from 'react'
import "./App.css";


const ButtonRow = (props) => {
    return (
        <section className="buttons">
        <div className="homeButtons">

          <button onClick = {props.tdhome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {props.tdhomeextra} className="homeButtons__touchdown">TD Home Extra Point</button>
          <button onClick = {props.fghome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <button className={props.isActive ? 'active' : 'inactive'} onClick = {props.toggle}>{props.isActive ? 'Pause' : 'Start'}
 </button>
        <span> &nbsp;&nbsp; </span>
        <button onClick = {props.reset}>Reset</button>
        <div className="awayButtons">

          <button onClick = {props.tdaway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {props.tdawayextra} className="homeButtons__touchdown">TD Away Extra Point</button>
          <button onClick = {props.fgaway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>

);
};

export default ButtonRow;
