//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./Toprow";
import ButtonRow from './buttons'


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [quarter, setQuarter] = useState(0);

  const qt = () => {
    if (quarter < 4){
       setQuarter(quarter + 1)
    }
   
  }
  
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
        <TopRow home = {home} away = {away} />
        <BottomRow qt = {qt} quarter = {quarter} />
      </section>
      <ButtonRow tdhome = {tdhome} tdaway = {tdaway} fgaway = {fgaway} fghome = {fghome}  />
      </div>
  );
}

export default App;
