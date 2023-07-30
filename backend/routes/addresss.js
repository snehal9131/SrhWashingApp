const router = require('express').Router();
let Add = require('../models/add.model');

router.route('/').get((req, res) => {
  Add.find()
    .then(addresss => res.json(addresss))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Address = req.body.Address;

  const newAdd = new Add({Address});

  newAdd.save()
    .then(() => res.json('Address added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;