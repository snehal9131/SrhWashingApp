const router = require('express').Router();
let Appoinment = require('../models/appoinment.model');

router.route('/').get((req, res) => {
    Appoinment.find()
    .then(appoinments => res.json(appoinments ))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const Firstname = req.body.Firstname;
  const Lastname = req.body.Lastname;
  const Address = req.body.Address;
  const Timeslot = Number(req.body.Timeslot);
  const date = Date.parse(req.body.date);

  const newAppoinment = new Appoinment({
    Firstname,
    Lastname,
    Address,
    Timeslot,
    date,
  });

  newAppoinment.save()
  .then(() => res.json('Appoinment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Appoinment.findById(req.params.id)
    .then(appoinment => res.json(appoinment))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Appoinment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Appoinment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Appoinment.findById(req.params.id)
    .then(appoinment => {
        appoinment.Firstname = req.body.Firstname;
        appoinment.Lastname = req.body.Lastname;
        appoinment.Address = req.body.Address;
        appoinment.Timeslot = Number(req.body.Timeslot);
        appoinment.date = Date.parse(req.body.date);

        
        appoinment.save()
        .then(() => res.json('Appoinment updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;