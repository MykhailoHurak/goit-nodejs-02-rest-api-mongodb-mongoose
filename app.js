const mongoose = require("mongoose")

const DB_HOST = "mongodb+srv://MykhailoHurak:goit-nodejs@cluster0.f28yniy.mongodb.net/playersreader?retryWrites=true&w=majority"

mongoose.connect(DB_HOST)
    .then(() => console.log("DataBase Connect Success"))
    .catch(error => console.log(error.message))
