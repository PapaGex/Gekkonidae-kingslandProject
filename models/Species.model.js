const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    genusName: {
        type: String, required: true, unique: false, trim: true,
    },
    speciesName: {
        type: String, required: true, unique: false, trim: true,
    },
    homeRange: {
        type: String, required: false, unique: false, trim: true,
    },
    tempLow: { 
        type: String, required: false, unique: false,
    },
    tempHigh: {
        type: String, required: false, unique: false,
    },
    humidity: {
        type: String, required: false, unique: false,
    },
    notes: {
        type: String, required: false, unique: false,
    },
}, {
    timestamps: true,
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;