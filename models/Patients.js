// models/Patient.js
const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
 patientID: String,
 surname: String,
 othernames: String,
 gender: String,
 phoneNumber: String,
 residentialAddress: String,
 emergencyName: String,
 emergencyContact: String,
 relationshipWithPatient: String,
});

module.exports = mongoose.model('Patient', PatientSchema);