import React from 'react';
import Title from './styledComponents/title.js';

const wrapperStyle = { width: 250 };

const Header = (props) => {
  return (
    <div style={wrapperStyle}>
      <Title>
        {props.title}
      </Title>
    </div>
  );
};

export default Header;

// cause git conflict