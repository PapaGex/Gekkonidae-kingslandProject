const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incubatorSchema = new Schema({
    evopositionDate: { type: Date, required: true },
    incubationTempRange: { type: String, required: true },
    hatchDateRange: { type: String, required: true },
    parents: { type: String, required: true },
    species: { type: String, required: true },
});