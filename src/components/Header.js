import React from 'react';
import Title from './styledComponents/title.js';

const wrapperStyle = { width: 250 };

const Header = (props) => {
  return (
    <div style={wrapperStyle}>
        <span>Hello git conflict</span>
        <span>{props}</span>
    </div>
  );
};

export default Header;

// Hello this will cause a git conflict
