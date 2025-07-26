import { io } from 'socket.io-client';

const socket = io();

socket.on("msg", data => {console.log(data)});