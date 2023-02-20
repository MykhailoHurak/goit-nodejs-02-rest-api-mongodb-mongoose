const mongoose = require("mongoose")

require("dotenv").config()

// const DB_HOST = "mongodb+srv://MykhailoHurak:<password>@cluster0.f28yniy.mongodb.net/playersreader?retryWrites=true&w=majority"
const { DB_HOST } = process.env

mongoose.connect(DB_HOST)
    .then(() => console.log("DataBase Connect Success"))
    .catch(error => console.log(error.message))
