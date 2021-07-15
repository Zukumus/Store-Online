require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routes/index');
const fileUpload = require('express-fileupload');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

PORT = process.env.PORT || 3000;


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);

// ERROR HANDLER
app.use(errorHandler);

app.get('/', (req, res) => res.status(200).json({ message: `Working + ${PORT}` }))

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()