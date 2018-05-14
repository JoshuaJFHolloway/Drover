import React from 'react';
import LogoStyle from './styledComponents/LogoStyle.js';

const wrapperStyle = { width: 250 };

const Logo = (props) => {
  return (
    <div style={wrapperStyle}>
      <LogoStyle>
        {props.title}
      </LogoStyle>
    </div>
  );
};

export default Logo;
