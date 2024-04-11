const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1:27017/";

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to DB");
    } catch (error) {
        console.error("DB connection failed");
        process.exit(0);
    }
};


module.exports = connectDB;