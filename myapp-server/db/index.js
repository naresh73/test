const mongoose = require('mongoose');
const dbURL = "mongodb+srv://naresh73:1430128@cluster0.s4xfmpv.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async () => {
    mongoose.connect(dbURL, (urlError) => {
        if(urlError) {
            urlError;
        }
        else {
            console.log("successfully connected to mongoDB database");
        }
    })
}

module.exports = connectToDB;
