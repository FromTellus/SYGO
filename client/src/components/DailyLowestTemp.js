/* eslint-disable react/destructuring-assignment */

import React from 'react';

const DailyLowestTemp = props => {
  const checkIfTempIsFetched = () => {
    if (props.temp === null) {
      return 'Loading..';
    }
    return props.temp;
  };
  checkIfTempIsFetched(props.temp);
  const tempPass = checkIfTempIsFetched();
  return (
    <div className="daily-lowest-temp">
      <h3>Today's lowest temp</h3>
      <p>{tempPass}</p>
    </div>
  );
};
export default DailyLowestTemp;
