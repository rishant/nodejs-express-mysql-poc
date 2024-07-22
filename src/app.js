const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Default GET endpoint to show server status
app.get('/', (req, res) => {
    res.status(200).json({ status: 'Server is up and running' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
