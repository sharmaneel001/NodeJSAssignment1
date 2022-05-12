const axios = require('axios').default;
const _ = require('underscore');

const getFilteredResponse = () => {

  return new Promise((resolve, reject) => {

    axios.get('https://coderbyte.com/api/challenges/json/json-cleaning')
      .then((res) => {
        let filteredRes = filteredData(res.data)
        resolve(filteredRes);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

//recursive call to filtered out the data from all possible combination
// array, object
// nested array, nested object
// nested array of object
const filteredData = obj => {
  //if nested array
  if (Array.isArray(obj)) { 
    return obj
        .map(value => (value && typeof value === 'object') ? filteredData(value) : value)
        .filter(value => !_.contains(['N/A', '-', ''], value)); 
  } else { 
    return Object.entries(obj)
        .map(([key, value]) => [key, value && typeof value === 'object' ? filteredData(value) : value])
        .reduce((a, [key, value]) => (_.contains(['N/A', '-', ''], value) ? a : (a[key]=value, a)), {});
  } 
}

module.exports = {
  getFilteredResponse
}