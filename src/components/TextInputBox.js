import React from "react";
import Header from "./Header";
import TextInput from "./TextInput";

const wrapperStyle = { width: 150, margin: 20 };

const TextInputBox = (props) => {


    return (
      <div style={wrapperStyle}>
        <Header title={props.title}/>
        <TextInput handleSelectChange={props.handleSelectChange} value={props.value} type={props.type} name={props.name} placeholder={props.placeholder} eventHandler={props.eventHandler}/>
      </div>
    );
};

export default TextInputBox;