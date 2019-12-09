import React, from 'react'
import "./App.css";
// import App from './App'

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

const ButtonRow = () => {
    return (
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

);
};

export default ButtonRow;
