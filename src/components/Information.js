import React from 'react';

const wrapperStyle = { width: 380 };

const Information = (props) => {

  return (
    <div style={wrapperStyle}>
      <li> Features: {props.features[0]}, {props.features[1]}, {props.features[2]}, {props.features[3]}.</li>
      <li> Fuel: {props.fuel}. </li>
      <li> Seats: {props.seats}. </li>
      <li> Engine: {props.engineSize}. </li>
      <li> Price: £{props.price}. </li>
    </div>
  );
};

export default Information;
