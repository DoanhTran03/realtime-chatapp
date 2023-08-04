const http = require("http");
const express = require("express");
const cors = require("cors");
const {Server} = require("socket.io")

const app = express();
app.use(cors);
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket) => {
    console.log(`User id: ${socket.id} is connected`);

    socket.on('join_room', (data) => {
        socket.join(data.room);
        console.log(`User id: ${socket.id} joined room ${data.room}`)
    })

    socket.on('send_message', (data) => {
        console.log(data)
        socket.to(data.room).emit('receive_message',data);
    })
})

server.listen(3000, () => {
    console.log("Server is listening on: http://localhost:3000")
})