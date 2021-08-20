const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incubatorSchema = new Schema({
    evopositionDate: { type: String, required: false },
    incubationTempRange: { type: String, required: false },
    hatchDateRange: { type: String, required: false },
    parents: { type: String, required: false },
    species: { type: String, required: false },
}, {
    timestamps: true,
});

const Incubator = mongoose.model('Incubator', incubatorSchema);

module.exports = Incubator;