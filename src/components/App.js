import React, {Component} from "react";
import TextInputBox from "./TextInputBox";
import ScaleInputBox from './ScaleInputBox';
import Results from './Results';
import Logo from './Logo';

const API_URL = 'https://app.joindrover.com/api/web/vehicles';

const columnStyle = { display: 'inline-block', width: '50%', 'vertical-align': 'top' };

class App extends Component {
  constructor() {
    super();

    this.state = {
      params: {
        start_date: new Date(Date.now()).toLocaleString().slice(0, -10),
        location: 'London, UK',
        max_distance: 50,
        vehicle_make: "Any",
        transmission: "Any",
        year: "Any", // integer
        fuel: "Any",
        tags: "Any", // array

        number_of_months: 12,
        number_of_weeks: 52,
        order_by: "price",
        order_direction: "asc",
        page: 1,
        per_page: 15,
        price_max: 2500,
        price_min :100,
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

    if((state.start_date.length &&
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

  getData() {
    if (this.areParamsValid()) {
      const body = this.distill(this.state.params);
      console.log("Fetching Data");

      const apiConfig = {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };

      fetch(API_URL, apiConfig)
        .then(results => results.json())
        .then(response => {
          console.log(response);
          this.setState({
            results: response.data
          });
          if (response.data.length === 0) {
            this.results(true)
          }
          else (this.results(false))
        })
    }
  }

  results(areResultsPresent) {
    this.setState({
      noResults: areResultsPresent,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    const params = this.state.params;

    if(name === "max_distance") {
      params[name]= parseInt(value);
      this.setState({params}, this.getData());
    }
    if(name === "year") {
      params[name]= parseInt(value);
      this.setState({params}, this.getData());
    }
    // if(event.target.name === "tags"){
    //   params[name]= [event.target.value];
    //   this.setState({params}, this.getData());
    // }
    else {
      params[name] = value;
      this.setState({params}, this.getData());
    }
  }

  handleSlider(event) {
    const params = this.state.params;
    params["price_min"] = event[0];
    params["price_max"] = event[1];

    this.setState({params}, this.getData());
  }

  // handleSelectChange(event) {
  //   debugger;
  //   console.log(event);
  // }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }

  render() {
    const {params} = this.state;
    const {results} = this.state;
    const {noResults} = this.state;
    const resultsArray = [];

    if (noResults === false && results.length < 1) {
      return <span>Loading Cars...</span>
    }

    if(noResults === false){
      const cap = results.length < 14 ? results.length : 14;

      for (let i = 0; i < cap; i++) {
        const image = results[i].images.find(i => i.position === 0);
        const otherImages = results[i].images.sort((a, b) => a.position - b.position).slice(1, 4);

        resultsArray.push(
          <Results
            vehicleMake={results[i].vehicle_make}
            vehicleModel={results[i].vehicle_model}
            postcode={results[i].postcode}
            mainImage={image.main_image_url}

            features={results[i].features} // only take a maximum of 4 features
            fuel={results[i].fuel}
            seats={results[i].number_seats_information}
            engineSize={results[i].engine_size_information}
            price={results[i].price_discount_and_deposit_schedule_hash[1].driver_price_pounds_after_discount_including_insurance}
          />
        )
      }
    }

    const keys = Object.keys(this.state.params);
    const values = Object.values(this.state.params);
    const textInputs = [];
    const titles = ['Subscription Start', this.capitalize(keys[1]), 'Distance (radius in miles)', 'Vehicle Make', 'Gear Box', this.capitalize(keys[5]), this.capitalize(keys[6]), this.capitalize(keys[7])];
    const placeholder = [null, 'Enter your location', null, null, null, null, null, null];

    for (let i = 0; i < 8; i++ ) {
      textInputs.push(
        <TextInputBox
          eventHandler={this.handleChange}
          name={keys[i]}
          title={titles[i]}
          value={values[i]}
          type={'text'}
          placeholder={placeholder[i]}
        />
      )
    }

  return (
    <div>
      <div style={columnStyle}>
        <Logo
          title={"Drover"}/>
        <form>
        <TextInputBox
          eventHandler={this.handleChange}
          // handleSelectChange={this.handleSelectChange}
          name={"start_date"}
          title={"Subscription Start"}
          value={params.start_date}
          type={"text"}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"location"}
          placeholder={"Enter your location"}
          title={"Location"}
          value={params.location}
          type={"text"}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"max_distance"}
          title={"Distance (radius in miles)"}
          value={params.max_distance}
          type={"number"}
        />
        <ScaleInputBox
          eventHandler={this.handleSlider}
          title={"Monthly Budget"}
          value= {params.location}
          min= {params.price_min}
          max= {params.price_max}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"vehicle_make"}
          title={"Vehicle Make"}
          value={params.vehicle_make}
          type={"text"}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"transmission"}
          title={"Gear Box"}
          value={params.transmission}
          type={"text"}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"year"}
          title={"Year"}
          value={params.year}
          type={"number"}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"fuel"}
          title={"Fuel Type"}
          value={params.fuel}
          type={"text"}
        />
        <TextInputBox
          eventHandler={this.handleChange}
          name={"tags"}
          title={"Car Type"}
          value={params.tags}
          type={"text"}
        />
        </form>
      </div>
      <div style={columnStyle}>
        {resultsArray}
        {'Hello world'}
        {textInputs}
      </div>
    </div>
    )
  }
}
export default App;