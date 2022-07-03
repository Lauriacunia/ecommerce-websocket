import dotenv from 'dotenv';
dotenv.config();
let productosDao
let carritosDao

switch (process.env.DB_CONNECTION) {
    case 'mongoDB':
        import('./productos/MongoDBProductos.js').then(({MongoDBProductos})=>{
            productosDao = new MongoDBProductos();
        })
        import('./carritos/MongoDBCarritos.js').then(({MongoDBCarritos})=>{
            carritosDao = new MongoDBCarritos();
        })
        break;
    case 'firebase':
        import('./productos/FirebaseProductos.js').then(({FirebaseProductos})=>{
            productosDao = new FirebaseProductos();
        })
        import('./carritos/FirebaseCarrito.js').then(({FirebaseCarrito})=>{
            carritosDao = new FirebaseCarrito();
        })
        break;
    default:
            throw new Error('No se ha definido una conexión a la base de datos');
        break;
    
}

export {productosDao, carritosDao};