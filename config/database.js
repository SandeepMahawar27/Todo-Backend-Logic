const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => console.log("DB Connection Successfully.."))
    .catch( (err) => {
        console.log("Resived a errr", err)
        process.exit(1);
    })
}

module.exports = dbConnect;