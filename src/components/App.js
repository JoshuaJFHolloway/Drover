import React, {Component} from "react";
import InputsHolder from './InputsHolder';
import ResultsHolder from './ResultsHolder';
import Logo from './Logo';
import {fetchData} from '../utils/fetchData';

const columnStyle = { display: 'inline-block', width: '50%', 'verticalAlign': 'top' };

class App extends Component {
  constructor() {
    super();

    this.state = {
      params: {
        subscription_start_days: 30,
        location: 'London, UK',
        max_distance: 50,
        vehicle_make: "Any",
        price_min :100,
        transmission: "Any",
        year: new Date().getFullYear(), // integer
        fuel: "Any",
        tags: "Any", // array
        price_max: 2500,

        number_of_months: 12,
        number_of_weeks: 52,
        order_by: "price",
        order_direction: "asc",
        page: 1,
        per_page: 15,
        rolling: false,
        vehicle_type: 'Consumer',
      },
      results: [],
      noResults: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSlider = this.handleSlider.bind(this);
  }

  componentWillMount() {
    this.getData();
  };

  areParamsValid() {
    const state = this.state.params;

    if((state.subscription_start_days.toString().length &&
        state.location.length &&
        state.max_distance.toString().length &&
        state.transmission.length &&
        state.vehicle_make.length &&
        state.fuel.length &&
        state.tags.length &&
        state.year.toString().length) > 0){
      return true;
    }
  }

  distill(data){
    const body = {};
    const keys = Object.keys(data);

    keys.forEach(key => {
      const value = data[key];
      if(value !== "Any") {
        body[key] = value;
      }
    });

    return body;
  }

  onSuccess = (response) => {
    console.log("onSuccess", response);
    this.setState({
      results: response.data
    });

    this.handleNoResults(!response.data.length);
  };

  onFailure = (err) => {
    // TODO: handle error messaging
    console.log("Something has gone wrong...");
  };

  getData() {
    if (this.areParamsValid()) {
      const body = this.distill(this.state.params);
      console.log("Fetching Data");

      const request = JSON.stringify(body);
      fetchData(request, this.onSuccess, this.onFailure);
    }
  }

  handleNoResults(areResultsPresent) {
    this.setState({
      noResults: areResultsPresent,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const params = this.state.params;

    if((name === "max_distance") || (name === "year") || (name === "subscription_start_days")){
      params[name]= parseInt(value, 10);
    }

    else if(name === "tags"){
      params[name]= [value];
    }

    else {
      params[name] = value;
    }

    this.setState({params}, this.getData())
  }

  handleSlider(event) {
    const params = this.state.params;
    params["price_min"] = event[0];
    params["price_max"] = event[1];

    this.setState({params}, this.getData());
  }

  // replaceCharactersAndSplit(words) {
  //   const replaceHyphens = words.replace(/-/gi, ",-,");
  //   const replaceUnderscores = replaceHyphens.replace(/_/gi, " ");
  //
  //   return replaceUnderscores.replace(/Fmam/gi, "FM/AM").split(/[\s,]+/);
  // }

  capitalize(words) {

    const replaceHyphens = words.replace(/-/gi, ",-,");
    const replaceUnderscores = replaceHyphens.replace(/_/gi, " ");
    const replaceDab = replaceUnderscores.replace(/Dab/gi, "DAB");
    const splitUpWords = replaceDab.replace(/Fmam/gi, "FM/AM").split(/[\s,]+/);
    let arrayOfWords = [];

    for (let i = 0; i < splitUpWords.length; i++) {
      arrayOfWords.push(splitUpWords[i].charAt(0).toUpperCase() + splitUpWords[i].substr(1));
    }

    let combinedWords = arrayOfWords.join(" ");
    const index = arrayOfWords.indexOf("-");
    const addTogether = arrayOfWords[index - 1] + arrayOfWords[index] + arrayOfWords[index + 1];

    arrayOfWords.splice(index -1 , 3, addTogether);

    let capitalized = null;

    splitUpWords.find(i => i === "-") ?
      capitalized = (arrayOfWords.join(" ")) : capitalized = (combinedWords);

    return capitalized;
  }

  render() {

    return (
      <div>
        <div style={columnStyle}>
          <Logo
            title={"Drover"}/>
          <form>
            <InputsHolder
              state={this.state}
              scaleHandler={this.handleSlider}
              textHandler={this.handleChange}
              capitalize={this.capitalize}
            />
          </form>
        </div>
        <div style={columnStyle}>
          <ResultsHolder
              state={this.state}
              capitalize={this.capitalize}
          />
        </div>
      </div>
    )
  }
}

export default App;