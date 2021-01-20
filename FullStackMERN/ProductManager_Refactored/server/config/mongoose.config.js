const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established connection to database"))
    .catch(err => console.log("Error connecting to database:", err));