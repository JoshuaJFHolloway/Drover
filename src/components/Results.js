import React from 'react';
import Information from './Information';
import ResultsHeader from './ResultsHeader';
import CarMainPicture from './CarMainPicture';

const wrapperStyle = { width: 250, margin: 20 };

const Results = (props) => {
    return (
      <div style={wrapperStyle}>
        <ResultsHeader
          vehicleMake={props.vehicleMake}
          vehicleModel={props.vehicleModel}
          postcode={props.postcode}
        />
        <CarMainPicture
          mainImage={props.mainImage}
        />
        <Information
          features={props.features}
          fuel={props.fuel}
          seats={props.seats}
          engineSize={props.engineSize}
          price={props.price}
        />
      </div>
    );
};

export default Results;