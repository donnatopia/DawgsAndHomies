const axios = require('axios');
require('dotenv').config();

module.exports = {
  getAllBreeds: () => {
    return axios({
      method: 'get',
      withCredentials: true,
      url: process.env.API_URL + '/dogs/breeds',
    });
  },
  getSearch: (params) => {
    return axios({
      method: 'get',
      withCredentials: true,
      url: process.env.API_URL + '/dogs/search',
      params: params,
    });
  },
  postDogs: ({ resultIds }) => {
    return axios({
      method: 'post',
      withCredentials: true,
      url: process.env.API_URL + '/dogs',
      data: resultIds,
    });
  },
};
