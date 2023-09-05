const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

module.exports = connectDB;
