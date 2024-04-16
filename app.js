require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./src/routes/router');

function startApp(appConfig) {
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use('/v1', router);

    var server = require('http').Server(app);
    server.listen(appConfig.port, () => {console.log(`Server running on port ${appConfig.port}`)});
}
module.exports = startApp;
