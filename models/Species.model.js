const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    speciesName: {
        type: String, required: true, unique: true, trim: true,
    },
    homeRange: {
        type: String, required: false, unique: false, trim: true,
    },
    tempLow: { 
        type: Number, required: true, unique: false,
    },
    tempHigh: {
        type: Number, required: true, unique: false,
    },
    humidity: {
        type: String, required: true, unique: false,
    },
    notes: {
        type: String, required: false, unique: true,
    },
}, {
    timestamps: true,
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;