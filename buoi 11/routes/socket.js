var express = require('express');
var router = express.Router();

let commands = {
    UPDATE_CLIENTS: 'UPDATE_CLIENTS',
    SEND_MESSAGE: 'SEND_MESSAGE'
}

let clients = [];

module.exports = (io) => {
    io.on('connection', socket => {
        let { id } = socket;
        console.log('new connection id:', id);
        clients.push({ id });
        io.emit('serverSendData', { command: commands.UPDATE_CLIENTS, payload: clients });

        socket.on('disconnect', socket => {
            clients = clients.filter(client => client.id !== id);
            io.emit('serverSendData', { command: commands.UPDATE_CLIENTS, payload: clients });
            console.log('disconnection id:', id);
        });


        socket.on('clientSendData', data => {
            console.log(data);
            io.emit('serverSendData', {command: commands.SEND_MESSAGE, payload: {
                id: data.id,
                data: data.payload
            }});
        }) ;
    });

    return router;
}