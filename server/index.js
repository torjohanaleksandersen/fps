import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173", // <-- your Vite frontend URL
        methods: ["GET", "POST"],
        credentials: true,
    },
});

const PORT = process.env.PORT || 5000;


io.on('connection', socket => {

    socket.emit("test", Math.random());

    socket.on('disconnect', () => {
        
    });
})

app.use(express.static("public"));

httpServer.listen(PORT);