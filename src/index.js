require('dotenv').config();
const Server = require('./server/server_app');

const app = new Server(process.env.PORT_SERVER || 5000);
app.listen();