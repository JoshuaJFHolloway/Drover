import React from "react";

const wrapperStyle = { width: 250 };

const TextInput = (props) => {
  return (
    <form>
      <input value={props.value} style={wrapperStyle} title={props.textBoxTitle} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.eventHandler}/>
    </form>
  );
};

export default TextInput;