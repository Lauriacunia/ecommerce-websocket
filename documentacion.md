#### Rutas PRODUCTOS
* raiz: /api/productos
* GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
* POST: '/' - Para incorporar productos al listado (disponible para administradores)
* PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)
* DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

#### Rutas CARRITO
* raiz: api/carritos
* POST: '/' - Crea un carrito y devuelve su id.
* DELETE: '/:id' - Vacía un carrito y lo elimina.
* GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito
* POST: '/:id/productos/:id_prod' - Para incorporar productos al carrito por su id de producto
* DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

## Consideraciones sobre import / export
* 1- Configurar type en package.json
```
 "type":"module",
```
*  2- exportar funciones y variables
```
export const options = {}

//otra opción 

module.exports = { options}
```
* 3- importar 
```
import {options} from '../configDB.js';
```
* 4- crear .env para 'ocultar' variables de entorno (password DB)
  [dotenv docs](https://www.npmjs.com/package/dotenv)