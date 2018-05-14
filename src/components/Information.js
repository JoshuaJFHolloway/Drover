import React from 'react';

const wrapperStyle = { width: 250 };

const Information = (props) => {

  return (
    <div style={wrapperStyle}>
      Features: {props.features[0]}, {props.features[1]}, {props.features[2]}, {props.features[3]}.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fuel: {props.fuel}.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seats: {props.seats}.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Engine: {props.engineSize}.
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price: £{props.price}.
    </div>
  );
};

export default Information;
