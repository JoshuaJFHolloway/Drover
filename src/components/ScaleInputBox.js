import React, {Component} from "react";
import Header from "./Header";
import Scale from './Scale';

const wrapperStyle = { width: 135, margin: 20 };

class ScaleInputBox extends Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <Header title={this.props.title}/>
        <Scale
          onChange={this.props.eventHandler}
          max = {this.props.max}
          min = {this.props.min}
        />
      </div>
    )
  }
}

export default ScaleInputBox