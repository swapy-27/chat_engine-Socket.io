const express = require ('express');
const app = express();
const port = 5000;


const db = require('./config/mongoose');


// settting up our chat server
const chatServer = require('http').createServer(app);
const chatSocket = require('./config/chat_socket').chatSockets(chatServer);
chatServer.listen(3000);
console.log ('chat socket is listening at port 3000')


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



//it is a middleware helps to serve static files like css and js to browser
app.use(express.static('./assets'))

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/',require('./routes'));


app.listen(port,function(err){
    console.log('your server is runnning on',port);
    
})