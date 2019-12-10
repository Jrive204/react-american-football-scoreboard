//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./Toprow";
import ButtonRow from './buttons'



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(0);
  const [togo, setTogo] = useState(10);
  const [ballOn, setBallOn] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [tenthseconds,setTenthSeconds] = useState(0)
  const [minute, setMinute] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
    function toggle() {
      setIsActive(!isActive);
    }
  
    function reset() {
      setMinute(0)
      setTenthSeconds(0)
      setSeconds(0);
      setIsActive(false);
    }
    
    let min = useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setMinute((minute) =>  (minute < 9) ? minute +1 : minute = 0 );
        }, 60000);
      } else if (!isActive && minute !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, minute]);
      
   let tenthsec = useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setTenthSeconds((tenthseconds) =>  (tenthseconds < 5) ? tenthseconds +1 : tenthseconds = 0 );
        }, 10000);
      } else if (!isActive && tenthseconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, tenthseconds]);

   let sec = useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setSeconds((seconds) =>  (seconds < 9) ? seconds +1 : seconds = 0);
        }, 1000);
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, seconds]);

   



  const qt = () => {
    (quarter < 4) ? setQuarter(quarter + 1) : setQuarter(1) 
  };


  const dwn = () => {
    (down < 4) ? setDown(down + 1) : setDown(1)

  }
  // const dwnn = setDown(down)


 
  const tdawayextra = () => {
    setAway(away + 1)
  }
  const tdhomeextra = () => {
    setHome(home + 1)
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
        <TopRow home = {home} away = {away} seconds = {seconds} tenthseconds = {tenthseconds} minute = {minute}/>
        <BottomRow qt = {qt} quarter = {quarter} dwn = {dwn} down = {down} togo = {togo} 
        tg = {() => (togo > 1) ? setTogo(togo - 1) : setTogo(10)} ballOn = {ballOn} Bo = {() =>{ (ballOn < 100) ? setBallOn(ballOn + 1) : setBallOn(0)}}/>
      </section>
      <ButtonRow tdhome = {tdhome} tdaway = {tdaway} fgaway = {fgaway} fghome = {fghome}
      tdhomeextra = {tdhomeextra} tdawayextra = {tdawayextra} toggle = {toggle} reset = {reset} isActive = {isActive} />
      </div>
  );
}

export default App;
