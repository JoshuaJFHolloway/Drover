import React from 'react';
import CarHeaderStyle from './styledComponents/CarHeader';

const ResultsHeader = (props) => {

  const shortenedPostcode = props.postcode.slice(0, -3);
  const wrapperStyle = { width: 350, paddingTop: 20 };
  const postcodeStyle = { paddingBottom: 10 };

  return (
    <div>
      <CarHeaderStyle style={wrapperStyle}>
        {`${props.vehicleMake} ${props.vehicleModel}`}
      </CarHeaderStyle>
      <div style={postcodeStyle}>
        {`Located in ${shortenedPostcode}`}
      </div>
    </div>
  );
};

export default ResultsHeader;
