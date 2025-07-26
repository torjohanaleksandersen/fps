import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors"

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173', // Vite dev server
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

const PORT = process.env.PORT || 5000;

io.on('connection', socket => {

    socket.emit("msg", 12345)

    socket.on('disconnect', () => {
        
    });
})

app.use(express.static("public"));

httpServer.listen(PORT);