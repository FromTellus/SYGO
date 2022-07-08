import React from 'react';

const Rain = props => {
  const checkIfRainIsFetched = () => {
    if (props.rain === null) {
      return 'Loading..';
    }
    if (props.rain === 0) {
        return 'No rain';
    }
    if (props.rain >= 0.1 && props.rain < 7) {
      return 'A little bit of rain today! Total downpour : '+ props.rain + 'mm';
    }
    if (props.rain > 7 && props.rain < 24) {
      return 'Bring an umbrella! Total downpour : '+ props.rain + 'mm';
    }
    if (props.rain > 24) {
      return 'Stay inside! Total downpour : '+ props.rain + 'mm';
    }
    return props.rain;
  };
  checkIfRainIsFetched(props.rain);
  const rainPass = checkIfRainIsFetched(props.rain);
  return (
    <div className="daily-rain">
      <h3>Rain</h3>
      <p>{rainPass}</p>
    </div>
  );
};
export default Rain;
