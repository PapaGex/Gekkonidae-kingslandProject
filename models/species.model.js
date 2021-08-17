const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    speciesName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 5
    },
    homeRange: {
        type: String,
        required: true,
        unique: false,
        trim: true,
    },
    tempRange: {
        type: String,
        required: true,
        unique: false,
    }, 
    humidity: {
        type: String,
        required: true,
        unique: false,
    },
    notes: {
        type: String,
        required: false,
        unique: true,
    },
}, {
    timestamps: true,
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;