//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
import topRow from "./Toprow";


// import ButtonRow from './buttons';


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  
  const tdaway = () => {
    setAway(away + 6)
  }
  const tdhome = () => {
    setHome(home + 6)
  }
  const fgaway = () => {
    setAway(away + 3)
  }
  const fghome = () => {
    setHome(home + 3)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        {/* <topRow home = {home} away = {away} /> */}
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>


         <div className="home__score">{home}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        
       
        <BottomRow />
      </section>
      {/* <ButtonRow /> */}
      <section className="buttons">
        <div className="homeButtons">
         
          <button onClick = {tdhome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {fghome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {tdaway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {fgaway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
