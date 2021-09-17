// 1. Import Mongoose and create db name
const mongoose = require("mongoose");
const DB = "belt_mern_db";

// 2. Connect mongoose to db
mongoose.connect("mongodb://localhost/"+ DB)
    .then(() => console.log(`Connected to MongoDB: ${DB}`))
    .catch(err => console.log(`Error connecting to ${DB}, err`))