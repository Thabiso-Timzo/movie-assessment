const mongoose = require('mongoose');

const MongoDBConnect = async () => {
     try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit()
    }
}

module.exports = MongoDBConnect;