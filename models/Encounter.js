// models/Encounter.js
const mongoose = require('mongoose');

const EncounterSchema = new mongoose.Schema({
 patientID: String,
 dateTime: Date,
 typeOfEncounter: String,
 vitals: {
    bloodPressure: String,
    temperature: String,
    pulse: String,
    spo2: String,
 },
});

module.exports = mongoose.model('Encounter', EncounterSchema);