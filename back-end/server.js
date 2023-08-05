const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const {Server} = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GETS", "POSTS"],
    }
})

io.on("connection", (socket) => {
    console.log(`User id: ${socket.id} is connected`);

    socket.on('join_room', (data) => {
        socket.join(data.room);
        console.log(`User id: ${socket.id} joined room ${data.room}`)
    })

    socket.on('send_message', (data) => {
        socket.to(data.room).emit('receive_message',data);
    })

    socket.on("disconnect", () => {
        console.log(`User id:  ${socket.id} is disconnected`)
    })
})

server.listen(3001, () => {
    console.log("Server is listening on: http://localhost:3001")
})