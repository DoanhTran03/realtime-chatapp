const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors);
const server = http.createServer(app);

server.listen(3000, () => {
    console.log("Server is listening on: http://localhost:3000")
})