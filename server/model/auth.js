const axios = require('axios');
require('dotenv').config();

module.exports = {
  login: ({ name, email }) => {
    return axios({
      method: 'post',
      withCredentials: true,
      url: process.env.API_URL + '/auth/login',
      data: { name, email },
    });
  },
  logout: () => {
    return axios({
      method: 'post',
      withCredentials: true,
      url: process.env.API_URL + '/auth/logout',
    });
  },
};
