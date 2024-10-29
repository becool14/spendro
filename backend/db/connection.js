// Initiate connection to MongoDB
require('dotenv').config();
const mongoose = require('mongoose');

const dburl = process.env.DB_URL || "mongodb://localhost:27017/spendro_db";
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully");
}).catch((err) => {
    console.log(err.message);
});