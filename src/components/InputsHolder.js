import React, {Component} from "react";
import TextInputBox from "./TextInputBox";
import ScaleInputBox from './ScaleInputBox';

class InputsHolder extends Component {

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }

  render() {

    const {params} = this.props.state;

    const keys = Object.keys(params);
    const values = Object.values(params);
    const titles = ['Subscription starts within (days)', this.capitalize(keys[1]), 'Distance (radius in miles)', 'Vehicle Make', 'Monthly Budget', 'Gear Box', this.capitalize(keys[6]), this.capitalize(keys[7]).concat(' Type'), 'Car Type'];
    const placeholder = [null, 'Enter your location', null, null, null, null, null, null];
    const type = ['number', 'text', 'number', 'text', null, 'text', 'number', 'text', 'text'];
    const textInputs = [];

    for (let i = 0; i < 9; i++) {
      if (i === 4) {
        textInputs.push(
          <ScaleInputBox
            eventHandler={this.props.scaleHandler}
            title={titles[i]}
            min={values[i]}
            max={values[9]}
            key={i}
          />
        )
      }
      else (
        textInputs.push(
          <TextInputBox
            eventHandler={this.props.textHandler}
            name={keys[i]}
            title={titles[i]}
            value={values[i]}
            type={type[i]}
            placeholder={placeholder[i]}
            key={i}
          />
        )
      )
    }

    return (
      <div>
          {textInputs}
      </div>
    )
  }
}

export default InputsHolder;