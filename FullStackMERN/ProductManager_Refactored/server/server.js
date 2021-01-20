const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

require('./config/mongoose.config');

const productRoutes = require("./routes/Product.routes");
productRoutes(app);

app.listen(8000, () => {console.log("Listening on port 8000")});