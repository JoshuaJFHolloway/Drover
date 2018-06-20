const API_URL = 'https://app.joindrover.com/api/web/vehicles';

const fetchData = (request, onSuccess, onFailure) => {
  const apiConfig = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: request
  };

  fetch(API_URL, apiConfig)
    .then(results => results.json())
    .then(response => {
      onSuccess && onSuccess(response);
    })
    .catch(error => {
      onFailure && onFailure(error);
    });
};

export {fetchData}