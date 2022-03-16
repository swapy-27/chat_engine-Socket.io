//all the observer code or server code will be here 
const Chat = require('../model/chat')
module.exports.chatSockets = function (socketServer) {

    const { Server } = require("socket.io");
    const io = new Server(socketServer);

    io.sockets.on('connection', function (socket) {

        console.log('new connection received', socket.id)

        socket.on('disconnect', function () {
            console.log('user disconnected!')
        })


        socket.on('join_room', function (data) {
            console.log('join request received!', data);


            socket.join(data.chatroom);

            io.in(data.chatroom).emit('user_joined', data);
        })


        socket.on('send_message', function (data) {
            console.log('received message ', data.message);
            createNewMessage(data);

            io.in(data.chatroom).emit('receive_message', data);
        })

    })


    let createNewMessage = async function (data) {
        try {
            await Chat.create({
                senders_id: data.user_id,
                senders_name: 'Swapy',
                message: data.message
            })
        } catch (error) {
            console.log(error);
        }
    }

}


