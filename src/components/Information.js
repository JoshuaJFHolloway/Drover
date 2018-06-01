import React from 'react';

const wrapperStyle = { width: 380 };

const Information = (props) => {

    const featuresArray = [];
    const length = props.features.length -1;

    for (let i = 0; i < length; i++) {
      featuresArray.push(props.features[i] + ", ");
    }

    featuresArray.push(props.features[length] + ".");

    return (
      <div style={wrapperStyle}>
        <li> Features: {featuresArray}</li>
        <li> Fuel: {props.fuel}.</li>
        <li> Seats: {props.seats}.</li>
        <li> Engine: {props.engineSize}L</li>
        <li> Price: £{props.price}.</li>
      </div>
    );
};

export default Information;
