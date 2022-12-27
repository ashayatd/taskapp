const mongoose = require("mongoose");
require('dotenv').config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

    const Connection = ()=>{
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.5ae0kkb.mongodb.net/test`;
    mongoose.connect(MONGODB_URI)

    mongoose.connection.on('connected',()=>{
        console.log("MONGODB connected");
    })
    mongoose.connection.on('disconnected',()=>{
        console.log("MONGODB disconnected");
    })
    mongoose.connection.on('error',(err)=>{
        console.log("Error on MongoDB", err.message);
    })
}
 
module.exports = Connection;