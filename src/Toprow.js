import React from "react";
import "./App.css";



const TopRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
  );
};

export default TopRow;



// import React from "react";
// import "./App.css";

// const topRow = (props) => {
//   return (
//     <div className="topRow">
//     <div className="home">
//       <h2 className="home__name">Lions</h2>


//    <div className="home__score">{props.home}</div>
//     </div>
//     <div className="timer">00:03</div>
//     <div className="away">
//       <h2 className="away__name">Tigers</h2>
//       <div className="away__score">{props.away}</div>
//     </div>
//   </div>
//   )
  
// };

// export default topRow;
