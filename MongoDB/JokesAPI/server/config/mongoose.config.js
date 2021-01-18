const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokes_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection to database"))
    .catch(() => console.log("Unable to connect to database"));