import React from 'react';
import SubHeaderStyle from './styledComponents/SubHeader.js';

const SubHeader = (props) => {
  return (
    <SubHeaderStyle>
      {props.SubHeader}
    </SubHeaderStyle>
  );
};

export default SubHeader;
