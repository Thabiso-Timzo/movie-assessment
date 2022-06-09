const mongoose = require('mongoose');

const MongoDBConnect = async () => {
     try {
        const conn = await mongoose.connect('mongodb+srv://Thabiso:OFz5pnHuRoAZJntG@cluster0.abmrk.mongodb.net/Movies?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit()
    }
}

module.exports = MongoDBConnect;