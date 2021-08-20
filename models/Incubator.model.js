const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema({ driver: ObjectId});

const incubatorSchema = new Schema({
    evopositionDate: { type: Date, required: true },
    incubationTempRange: { type: String, required: true },
    hatchDateRange: { type: String, required: true },
    parents: { type: String, required: true },
    species: { type: String, required: true },
}, {
    timestamps: true,
});

const Incubator = mongoose.model('Incubator', incubatorSchema);

module.exports = Incubator;