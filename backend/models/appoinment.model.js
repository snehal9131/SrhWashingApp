const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appoinmentSchema = new Schema({
  Firstname: { type: String, required: true },
  Lastname: { type: String, required: true },
  Address: { type: String, required: true },
  Timeslot: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Appoinment = mongoose.model('Appoinment', appoinmentSchema);

module.exports = Appoinment;