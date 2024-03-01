const express = require('express');
const bodyParser = require('body-parser');
const classRoutes = require('./src/routes/classRoutes');
const assignmentRoutes = require('./src/routes/assignmentRoutes');
const db = require('./src/config/db');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(bodyParser.json());
// Connect to MongoDB

db.connect();
mongoose.connect('mongodb+srv://sojanjoroge:<39094880>@stevoh.6owzbyh.mongodb.net/?retryWrites=true&w=majority&appName=STEVOH');
// Routes
app.use('/classes', classRoutes);
app.use('/assignments', assignmentRoutes);
// Start server  
app.listen(PORT, () => {
 Console.log('Server is running on port ${PORT}');
});