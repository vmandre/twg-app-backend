const mongoose = require('mongoose')

// mongoose instance connection url connection
//mongoose.connect('mongodb://localhost/TwgDB', {
    mongoose.connect('mongodb+srv://vmandre:vmandre-mongodb@cluster-twg-db-1qvii.gcp.mongodb.net/TwgDB?retryWrites=true', {    
    useNewUrlParser: true
});

module.exports = mongoose