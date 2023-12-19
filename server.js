const express = require('express');
const patientsRoutes = require('./routes/patients');
const nursesRoutes = require('./routes/nurses');
const doctorsRoutes = require('./routes/doctors');

const app = express();

app.use(express.json());
app.use('/patients', patientsRoutes);
app.use('/nurses', nursesRoutes);
app.use('/doctors', doctorsRoutes);

module.exports = app;