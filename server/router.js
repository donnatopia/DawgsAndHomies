const router = require('express').Router();
const { requestLogin, requestLogout } = require('./controller/auth.js');
const {
  requestAllBreeds,
  requestSearch,
  requestDogs,
} = require('./controller/dogs.js');

router.post('/auth/login', requestLogin);
router.post('/auth/logout', requestLogout);

router.get('/dogs/breeds', requestAllBreeds);
router.get('/dogs/search', requestSearch);
router.post('/dogs', requestDogs);

module.exports = router;
