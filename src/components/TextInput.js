import React from "react";

const wrapperStyle = { width: 250 };

const TextInput = (props) => {
  return (
    <div>
    <div>
      <input value={props.value} style={wrapperStyle} title={props.textBoxTitle} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.eventHandler}/>
    </div>
    {/*<div>*/}
      {/*<select id="mySelect" onChange={props.handleSelectChange}>*/}
        {/*{props.items.map() => <>}*/}
        {/*<option value="1">1</option>*/}
        {/*<option value="2">2</option>*/}
        {/*<option value="3">3</option>*/}
      {/*</select>*/}
      {/*</div>*/}
    </div>
  );
};

export default TextInput;