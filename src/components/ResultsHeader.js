import React from 'react';

const ResultsHeader = (props) => {

  const shortenedPostcode = props.postcode.slice(0, -3);
  const wrapperStyle = { width: 350 };

  return (
    <div style={wrapperStyle}>
      {`${props.vehicleMake} ${props.vehicleModel}`} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {`Located in ${shortenedPostcode}`}
    </div>
  );
};

export default ResultsHeader;
