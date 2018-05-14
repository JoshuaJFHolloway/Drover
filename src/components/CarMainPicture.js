import React from 'react';

const wrapperStyle = { width: 350 };

const CarMainPicture = (props) => {
  return (
    <div>
      <img src={props.mainImage} alt={"car"} style={wrapperStyle}/>
    </div>
  );
};

export default CarMainPicture;
