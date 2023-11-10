const { getAllBreeds, getSearch, postDogs } = require('../model/dogs.js');

module.exports = {
  requestAllBreeds: (req, res) => {
    getAllBreeds()
      .then((data) => res.send(200).json(data))
      .catch((err) => {
        console.log('Error getting all breeds', err);
        res.sendStatus(404);
      });
  },
  requestSearch: (req, res) => {
    getSearch(req.query)
      .then((data) => res.send(200).json(data))
      .catch((err) => {
        console.log('Error getting search results', err);
        res.sendStatus(404);
      });
  },
  requestDogs: (req, res) => {
    postDogs(req.body)
      .then((data) => res.send(200).json(data))
      .catch((err) => {
        console.log('Error getting dog information', err);
        res.sendStatus(404);
      });
  },
};
