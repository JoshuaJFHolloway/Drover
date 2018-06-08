import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

const params = {
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
};

const handleChangeEvent = {
  target: {
    name: 'fuel',
    value: 'petrol'
  }
};

const handleSliderEvent = [300, 2000];

describe('App', () => {
  let app = shallow(<App/>);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  describe('passing props', () => {

    describe('InputsHolder component', () => {

      it('has state', () => {
        expect(app.find('InputsHolder').prop('state')).toBe(app.instance().state);
      });

      it('has scaleHandler', () => {
        expect(app.find('InputsHolder').prop('scaleHandler')).toBe(app.instance().handleSlider);
      });

      it('has textHandler', () => {
        expect(app.find('InputsHolder').prop('textHandler')).toBe(app.instance().handleChange);
      });

      it('has capitalize', () => {
        expect(app.find('InputsHolder').prop('capitalize')).toBe(app.instance().capitalize);
      });
    });

    describe('Logo component', () => {

      it('has title', () => {
        expect(app.find('Logo').prop('title')).toBe(app.instance().title);
      })
    });

    describe('ResultsHolder component', () => {

      it('has state', () => {
        expect(app.find('ResultsHolder').prop('state')).toBe(app.instance().state);
      });

      it('has capitalize', () => {
        expect(app.find('ResultsHolder').prop('capitalize')).toBe(app.instance().capitalize);
      })
    });

  });

  describe('Initializes state', () => {

    it('initializes state correctly', () => {
      expect(app.state('params')).toEqual(params);
    });
  });

  describe('Updating state successfully', () => {

    describe('handleChange', () => {

      it('updates the state correctly depending on the event.target', () => {
        app.instance().handleChange(handleChangeEvent);
        expect(app.state('fuel')).toEqual('petrol');
      });
    });

    describe('handleSlider', () => {

      it('updates the price correctly', () => {
        app.instance().handleSlider(handleSliderEvent);
        expect(app.state('price_min')).toEqual(300);
        expect(app.state('price_max')).toEqual(2000);
      });
    })
  });

  describe('getData', () => {

    it('calls the drover url and returns data to me', () => {
      return app.getData()
        .then(data => {
          expect(data).toBeDefined();
          expect(data.owner_name).toEqual('Drover Ltd')
        });
    })
  })

});

//   describe('getData', () => {
//
//     beforeEach(() => {
//       fetch.resetMocks()
//     });
//
//     it('calls the drover url and returns data to me', () => {
//       fetch.mockResponseOnce(JSON.stringify({results: 'cars'}));
//
//       APIRequest('google').then(res => {
//         expect(res.results).toEqual('cars')
//       });
//
//       expect(fetch.mock.calls.length).toEqual(1);
//       expect(fetch.mock.calls[0][0]).toEqual('https://app.joindrover.com/api/web/vehicles');
//     });
//   })
//
// });

