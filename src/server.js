import express from 'express';
import morgan from 'morgan';
import { Server } from "socket.io";
import http from 'http';
import cors from 'cors';
import { normalize, schema, denormalize } from 'normalizr';
import { inspect } from 'util';
import productosRouter from './routes/ProductosRoutes.js';
import carritosRouter from './routes/CarritosRoutes.js';
const app = express();
const PORT = 8080;
// const chat = {
//     id: '30950',
//     nombre: 'Canal de chat - Comisión 30950',
//     mensajes: [] // contiene un array de mensajes
// }

const mensajes = [];


/** Tenemos dos servidores:  httpServer y ioServer */
const httpServer = http.createServer(app);

/** Crear nuevo servidor websocket */
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
         }
});


//** Middlewares */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(
    {
       origin: '*',
       methods: 'GET, POST, PUT, DELETE, OPTIONS',
    }
));


/** Routes */
app.use('/api/productos', productosRouter);
app.use('/api/carritos', carritosRouter);

function onInit() {
    console.log('Iniciando App...');
}
/** ★━━━━━━━━━━━★ NORMALIZR ★━━━━━━━━━━━★*/

// function print(obj){
//     console.log(inspect(obj, { depth: null }));
// }

/** Definir schema autor */

//const autorSchema = new schema.Entity('autores');

/** Definir schema mensaje */

// const mensajeSchema = new schema.Entity('mensajes', {
//   id: { type: String },
//   autor: autorSchema,
//   texto: '',
//   timestamp: { type: Number }
// });

// const chatSchema = new schema.Entity('chats', {
//   id: { type: String },
//   mensajes: [mensajeSchema]
// });


// const normalizeChat = (chat) => {
//     return normalize(chat, chatSchema);
// }

/** ★━━━━━━━━━━━★ WEBSOCKET ★━━━━━━━━━━━★*/

// Nuevo servidor para el chat
io.on('connection', (socket) => {
    // el socket trae toda la data del cliente
     console.log('New user connected. Soquet ID : ', socket.id);

    /** on para escuchar
     *  emit para enviar
     */
    socket.on('set-user', (user) => {
        console.log('Current User Data', user);
       // socket.emit('user-connected', user);
       // socket.broadcast.emit('user-connected', user);
    });
  
   /** El servidor recibe los nuevos mensajes y los re-envia los */
    socket.on('new-message', (message) => {
        console.log('New Message', message);
        // chat.mensajes.push(message);
        // const chatNormalized =  normalizeChat(chat);
        // print(chatNormalized);
        mensajes.push(message);
        socket.emit('all-messages', mensajes);
        socket.broadcast.emit('all-messages',mensajes);
    });

   // socket.emit('messages', messages);
    socket.on('disconnect', (user) => {
        console.log('User disconnected:', user);
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
