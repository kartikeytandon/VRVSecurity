const express = require('express');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);

module.exports = app;