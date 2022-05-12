var express = require('express');
var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function(socket){
    socket.on('colocar_id_del_mensaje',function(data){
        console.log(data);
        //io.sockets.emit('desde_servidor',data);
    });

    socket.on('desde_esp32_temp_c',function(data){
        console.log(data);
        io.sockets.emit('desde_servidor_temp_c',data);
    });

    socket.on('desde_esp32_temp_f',function(data){
        console.log(data);
        io.sockets.emit('desde_servidor_temp_f',data);
    });

    socket.on('desde_esp32_hum',function(data){
        console.log(data);
        io.sockets.emit('desde_servidor_hum',data);
    });

    socket.on('desde_cliente',function(data){
        console.log(data);
        io.sockets.emit('desde_servidor_comando',data);
    });

});

server.listen(5001, function(){
    console.log("Servidor corriendo en el puerto 5001.")
});
