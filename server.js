const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

// Initialize the Express app
const app = express();

// Middleware to enable CORS for all incoming requests
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(bodyParser.json());

// Register the task-related routes under the `/api` namespace
app.use('/api', taskRoutes);

// Define the port for the server to listen on
const PORT = process.env.PORT || 4000;

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
