<template>
    <div>
      <h2>Lista de Productos</h2>
      <table v-if="productos.length">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="index">
            <td v-if="!producto.editing">{{ producto.product }}</td>
            <td v-else><input v-model="producto.product"></td>
  
            <td v-if="!producto.editing">{{ producto.category }}</td>
            <td v-else><input v-model="producto.category"></td>
  
            <td v-if="!producto.editing">{{ producto.price }}</td>
            <td v-else><input v-model="producto.price" type="number"></td>
  
            <td v-if="!producto.editing">{{ producto.description }}</td>
            <td v-else><input v-model="producto.description"></td>
  
            <td v-if="!producto.editing"><img :src="producto.image" alt="Imagen del producto" style="width: 100px; height: 100px;"/></td>
            <td v-else><input v-model="producto.image" type="text"></td>
  
            <td>
              <button v-if="!producto.editing" @click="editarProducto(producto)">Editar</button>
              <button v-if="producto.editing" @click="guardarCambios(producto)">Guardar</button>
              <button v-if="producto.editing" @click="cancelarEdicion(producto)">Cancelar</button>
              <button @click="eliminarProducto(index)" class="btn-eliminar">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-state">
        <p>No hay productos disponibles.</p>
      </div>
      <button @click="agregarProducto">Agregar Producto</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "ProductoListado",
  
    data() {
      return {
        productos: [], 
      };
    },
  
    mounted() {
      this.cargarProductos();
    },
  
    methods: {
      cargarProductos() {
        const URL = "https://real-gray-cheetah-fez.cyclic.app/products/productos";
        axios.get(URL)
          .then(response => {
            this.productos = response.data.map(producto => ({
              ...producto,
              editing: false
            }));
          })
          .catch(error => {
            console.error("Error al cargar productos:", error);
          });
      },
  
      editarProducto(producto) {
        producto.editing = true;
      },
  
      guardarCambios(producto) {
    const url = `https://real-gray-cheetah-fez.cyclic.app/products/productos/${producto._id}`; // Asegúrate de que es _id y no id
    axios.put(url, {
      product: producto.product,
      category: producto.category,
      price: producto.price,
      description: producto.description,
      image: producto.image
    })
    .then(response => {
      producto.editing = false;
      this.actualizarProductoEnLista(response.data, producto._id);
    })
    .catch(error => {
      console.error("Error al actualizar el producto:", error);
    });
  },

  actualizarProductoEnLista(productoActualizado, id) {
    const index = this.productos.findIndex(p => p._id === id); // Asegúrate de que es _id y no id
    if (index !== -1) {
      this.$set(this.productos, index, productoActualizado);
    }
  },

  
      cancelarEdicion(producto) {
        producto.editing = false;
        this.cargarProductos(); // Opcional: recargar datos originales del servidor
      },
  
      eliminarProducto(index) {
    const producto = this.productos[index];
    const url = `https://real-gray-cheetah-fez.cyclic.app/products/productos/${producto._id}`; // Usar _id

    axios.delete(url)
      .then(() => {
        // Eliminar el producto del array local si la petición fue exitosa
        this.productos.splice(index, 1);
      })
      .catch(error => {
        console.error("Error al eliminar el producto:", error);
        // Aquí puedes manejar errores, como mostrar un mensaje al usuario
      });
  },

  
      agregarProducto() {
        if (this.$router.currentRoute.path !== '/dashboard') {
            this.$router.push({ name: 'products' }).catch(err => {
                if (err.name !== 'NavigationDuplicated') {
                throw err;
  }
});

        }
    },
    },
  };
  </script>
  
 
    
<style>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.9em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

th, 
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #dddddd;
}

th {
  background-color: #009879;
  color: #ffffff;
  text-transform: uppercase;
}

tr {
  background-color: #ffffff;
}

tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

tr:last-of-type {
  border-bottom: 2px solid #009879;
}

img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

button {
  background-color: #009879;
  color: white;
  border: none;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #007b5e;
}

  .btn-eliminar {
    background-color: #c0392b;
    color: white;
    border: none;
    padding: 5px 10px;
    text-transform: uppercase;
    margin: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .btn-eliminar:hover {
    background-color: #a93226;
  }

  /* Tus estilos existentes... */

  .empty-state {
    text-align: center;
    padding: 20px;
    color: #757575;
  }

  .empty-state img {
    max-width: 300px;
    margin-top: 20px;
  }

</style>
