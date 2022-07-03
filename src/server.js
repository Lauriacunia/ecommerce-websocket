import express from 'express';
import morgan from 'morgan';
import { Server } from "socket.io";
import http from 'http';
import productosRouter from './routes/ProductosRoutes.js';
import carritosRouter from './routes/CarritosRoutes.js';
const app = express();
const PORT = 8080;
const messages = [];

/** Tenemos dos servidores:  httpServer y ioServer */
const httpServer = http.createServer(app);

/** Crear nuevo servidor websocket */
const io = new Server(httpServer);

//** Middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/** Routes */
app.use('/api/productos', productosRouter);
app.use('/api/carritos', carritosRouter);

function onInit() {
    console.log('Iniciando App...');
}

/** ★━━━━━━━━━━━★ WEBSOCKET ★━━━━━━━━━━━★*/

// Nuevo servidor para el chat
io.on('connection', (socket) => {
    // el socket trae toda la data del cliente
     console.log('New user connected. Soquet ID : ', socket.id);

    /** on para escuchar
     *  emit para enviar
     */
    socket.on('set-name', (name) => {
        console.log('set-name', name);
        socket.emit('user-connected', name);
        socket.broadcast.emit('user-connected', name);
    });
  
   /** El servidor recibe los nuevos mensajes y los re-envia los */
    socket.on('new-message', (message) => {
        messages.push(message);
        socket.emit('messages', messages);
        socket.broadcast.emit('messages', messages);
    });

   // socket.emit('messages', messages);
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
   
}
);


/** ★━━━━━━━━━━━★ CONNECTION SERVER ★━━━━━━━━━━━★ */

try {
    httpServer.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}

onInit();
