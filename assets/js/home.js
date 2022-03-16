//all the browser side or subscriber code will be here 

const socket = io.connect('http://localhost:3000');

socket.on('connect',function(){
    console.log('connection established using socket')
})

socket.emit('join_room',{
    user_id:socket.id,
    chatroom:'anime_club'
});

socket.on('user_joined',function(data){
    console.log('user joined !',data);
})

let submitMessage = document.getElementById('chat_message_button');



submitMessage.addEventListener('click',function(){
    let msg = document.getElementById('chat_message').value;

    if (msg!=''){

        socket.emit('send_message',{
            message:msg,
            user_id:socket.id,
            chatroom:'anime_club'
        })
    }
})


socket.on('receive_message',function(data){

    let newmessage= document.createElement('div');
    newmessage.classList.add('chat_receive');
    if (socket.id==data.user_id){
        newmessage.classList.add('chat_send');
    }
     let m = document.createElement('p');
     let textContent = document.createTextNode(data.message);
    m.appendChild(textContent);
    newmessage.appendChild(m)

    document.getElementById('chat_body').appendChild(newmessage);
})