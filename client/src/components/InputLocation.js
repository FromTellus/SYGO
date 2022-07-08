import React from 'react';

const InputLocation = (props) => {
  const onInputChange1 = e => {
    props.setLatitude(e.target.value);
  };
  const onInputChange2 = e => {
    props.setLongitude(e.target.value);
  };

  return (
       <><div className='coordinates'>
        <input className='input__field' type="number" placeholder="Latitude" value={props.latitude} onChange={onInputChange1} />
        <input className='input__field' type="number" placeholder="Longitude" value={props.longitude} onChange={onInputChange2} />
        </div>
       </>
  );
};
export default InputLocation;
