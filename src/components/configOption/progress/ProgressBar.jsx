import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample() {
  const now = 60;
  return <div className="progress-container">
   <ProgressBar now={now} label={`${now}%`} />
   </div>
}

export default WithLabelExample;