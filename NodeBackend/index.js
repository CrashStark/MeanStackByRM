const { Socket } = require('dgram');
const express=require('express');
const app=express();

const http = require('http');
let server=http.Server(app);

let socketIo=require('socket.io');
let io=socketIo(server);

const port=process.env.PORt||3000;

server.listen(port,()=>{
    console.log(`Started on port ${port}`);
})

io.on('connection',(socket)=>{
    socket.on('join',(data)=>{
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user Joined');
    });
    socket.on('message',(data)=>{
        io.in(data.room).emit('new message',({user:data.user,message:data.message}))
    })
})
