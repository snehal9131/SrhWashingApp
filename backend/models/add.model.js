const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addSchema = new Schema({
    Address: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
});

const Adds = mongoose.model('Adds', addSchema);

module.exports = Adds;