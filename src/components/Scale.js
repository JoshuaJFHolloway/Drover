import React from 'react';
// import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import SubHeader from './SubHeader';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

const wrapperStyle = { margin: 8 , width: 237 };

const Scale = props => {
  return (
    <div style={wrapperStyle}>
      <SubHeader SubHeader={`£${props.min} - £${props.max}`}/>
      <Range min={100} max={2500} defaultValue={[100, 2500]} tipFormatter={value => `£${value}`} onChange={props.onChange} />
    </div>
  )
};

export default Scale;