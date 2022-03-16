const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({

    senders_id:{
        type:String,
        required:true
    },
    senders_name:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }

}, {
    timestamps: true
})


const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;