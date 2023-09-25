require('dotenv').config();
const Server = require('./server/server_app');

const app = new Server(5000);
app.listen();