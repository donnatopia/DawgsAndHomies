const { login, logout } = require('../model/auth.js');

module.exports = {
  requestLogin: (req, res) => {
    login(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error Logging In', err);
        res.sendStatus(404);
      });
  },
  requestLogout: (req, res) => {
    logout()
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log('Error Logging Out', err);
        res.sendStatus(404);
      });
  },
};
