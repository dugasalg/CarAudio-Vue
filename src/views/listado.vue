<template>
    <div>
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="index">
            <td>{{ producto.product }}</td>
            <td>{{ producto.category }}</td>
            <td>{{ producto.price }}</td>
            <td>{{ producto.description }}</td>
            <td><img :src="producto.image" alt="Imagen del producto" style="width: 100px; height: 100px;"/></td>
          </tr>
        </tbody>
      </table>
      <button @click="agregarProducto">Agregar Producto</button>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: "ProductoListado",
  components:{

  },

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
          this.productos = response.data; // Asume que la API devuelve un array de productos
        })
        .catch(error => {
          console.error("Error al cargar productos:", error);
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

</style>
