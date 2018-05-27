import React from "react";
import Results from './Results'

const ResultsHolder = (props) => {

    const {results, noResults} = props.state;
    const resultsArray = [];

    if (noResults === false && results.length < 1) {
      return <span>Loading Cars...</span>
    }

    if(noResults === false){
      const cap = results.length < 14 ? results.length : 14;

      for (let i = 0; i < cap; i++) {
        const image = results[i].images.find(i => i.position === 0);
        // const otherImages = results[i].images.sort((a, b) => a.position - b.position).slice(1, 4);

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
            key={i}
          />
        )
      }
    }

    return (
      <div>
        {resultsArray}
      </div>
    )
};

export default ResultsHolder;