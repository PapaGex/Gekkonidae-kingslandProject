const mongoose = require('mongoose');
const Accesory = require('./Accessory');

  const gekkoSchema = new mongoose.GekkoSchema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    ImageUrl: {
        type: String,
        required: true
    },
// {add boolean for adult or hatchling}
// {habitat descriptor from radio button}
// {hatch date or close approximation}
// {ease of care}
  })