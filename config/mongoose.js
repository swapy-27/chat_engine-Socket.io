const mongoose = require("mongoose");

//connect the database
mongoose.connect('mongodb://localhost:27017/chat_engine');

//acquire connection (to check it successful)
const db = mongoose.connection;


db.on('error',()=>{
    console.log('error occured in connecting with databses')
})

db.once('open',()=>{

console.log('connected to database')

})