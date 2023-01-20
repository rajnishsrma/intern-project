import React from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import './progress.css';

function WithLabelExample() {
  // const now = 60;
  return <>
        <div className="progress-container">
            <div className="line"></div>
            <div className="current-line"></div>
            <div className="percent">60%</div>
        </div>
  </>
  
  // <div className="progress-container">
  //  <ProgressBar now={now} label={`${now}%`} />
  //  </div>
}

export default WithLabelExample;