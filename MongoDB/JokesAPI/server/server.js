const express = require('express');
const app = express();

require('./config/mongoose.config');

app.use(express.json(), express.urlencoded({extended: true}));

const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);

app.listen(8000, () => console.log('listening on port 8000'));