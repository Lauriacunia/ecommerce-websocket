// import {options} from './config/configDB.js';
// import knex from 'knex';

const productos = [
    {
        "name": "Iphone X",
        "description": "Pantalla de 6.5 pulgadas",
        "code": 24567,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175106135-03263dff-9b33-4b1c-9835-4e23c2e47ccf.jpeg",
        "price": 145000,
        "stock": 23
    },
    {
        "name": "Monitor",
        "description": "Pantalla de 27 pulgadas, con resolución de 1920x1080",
        "code": 76987,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175106271-887d1db1-35c6-49db-a5a4-c417403ee402.jpeg",
        "price": 23500,
        "stock": 45
    },
    {
        "name": "Mouse",
        "description": "Mouse inalámbrico, con botones de doble click",
        "code": 36987,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175106539-b3386b45-7f02-4a19-b9e1-3ea28a20cccf.jpeg",
        "price": 7500,
        "stock": 6
    },
    {
        "name": "Patineta",
        "description": "Patineta de recreo, con motor de 2 tiempos",
        "code": 96987,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175106679-6a8d117d-1d2a-4e57-9fb4-5b61408c8d84.jpeg",
        "price": 17500,
        "stock": 5
    },
    {
        "name": "PC Gamer",
        "description": "PC Gamer, con procesador Intel Core i7",
        "code": 96987,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175106832-cf19fbf8-dd8d-4517-95bb-8facfe6d2d35.jpeg",
        "price": 147500,
        "stock": 7
    },
    {
        "name": "Playstation 4",
        "description": "Playstation 4, con procesador Intel Core i7",
        "code": 43987,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175106954-0ea0e831-44ae-4133-8b04-dc017429683e.jpeg",
        "price": 127900,
        "stock": 27
    },
    {
        "name": "Teclado",
        "description": "Retroilumbrado USB",
        "code": 9987,
        "thumbnail": "https://user-images.githubusercontent.com/63796774/175107265-613e3ff4-e6ec-480b-b83f-5b5a1ecad429.jpeg",
        "price": 2300,
        "stock": 215
    },

];

// (async () => {
//     const db = knex(options.mysql);
//     try {
//         /**create table */
//         await db.schema.createTableIfNotExists('products', (table) => {
//             table.increments('id').primary();
//             table.string('name');
//             table.string('description');
//             table.integer('price');
//             table.integer('stock');
//             table.string('thumbnail');
//             table.string('code');
//         });
//         /** 🦸‍♀️ CREATE - Insert raw (insertar uno o mas  registro(s))*/
//         await db('products').insert(products);
//         console.log('Datos insertados');
       
//     } catch (err) {
//         console.log(err);
//     }
// })();