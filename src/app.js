const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger.config');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());

// Default GET endpoint to show server status
app.get('/', (req, res) => {
    res.status(200).json({ status: 'Server is up and running' });
});

// Application Routes
app.use('/api', userRoutes);

// Application Routes Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
