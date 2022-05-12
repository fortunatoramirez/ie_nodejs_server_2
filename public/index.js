var socket = io.connect('192.168.1.127:5001', {'forceNew':true});


socket.on('desde_servidor_temp_c', function(data){
    //console.log(data);
    //data_JSON = JSON.parse(data)
    var cadena = `<div> <strong> Temperatura:  <font color="red">` + data + `°C</font></strong> </div>`;
    document.getElementById("div_temperatura_c").innerHTML = cadena;
});

socket.on('desde_servidor_temp_f', function(data){
    //console.log(data);
    //data_JSON = JSON.parse(data)
    var cadena = `<div> <strong> Temperatura:  <font color="blue">` + data + `°F</strong> </div>`;
    document.getElementById("div_temperatura_f").innerHTML = cadena;
});

socket.on('desde_servidor_hum', function(data){
    //console.log(data);
    //data_JSON = JSON.parse(data)
    var cadena = `<div> <strong> Humedad:  <font color="green">` + data + `%</strong> </div>`;
    document.getElementById("div_humedad").innerHTML = cadena;
});

function encender()
{
    socket.emit("desde_cliente","ON");
}

function apagar()
{
    socket.emit("desde_cliente","OFF");
}

function enviar_comando()
{
    var comando = document.getElementById('txt_comando').value;
    socket.emit('desde_cliente',comando);

}


