const mongoose = require('mongoose');

// mongodb connection
module.exports = async () => {
    try {
        const connectionParams = { useNewUrlParser: true, useUnifiedTopology: true }
        await mongoose.connect('mongodb+srv://movieProject:DbdFaqxwdLkmN6Gb@cluster0.u7o09.mongodb.net/MovieProject?retryWrites=true&w=majority', connectionParams);
        console.log("Database connected!");
         
    } catch (error) {
        console.log(error);
        console.log('Could not connect to the database');
    }
}

//DbdFaqxwdLkmN6Gb