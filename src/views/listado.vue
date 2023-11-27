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
            <td>{{ producto.Producto }}</td>
            <td>{{ producto.Categoria }}</td>
            <td>{{ producto.Precio }}</td>
            <td>{{ producto.Descripcion }}</td>
            <td><img :src="producto.Imagen" alt="Imagen del producto" style="width: 100px; height: auto;"/></td>
          </tr>
        </tbody>
      </table>
      <button @click="agregarProducto">Agregar Producto</button>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: "ListadoProductos",

  data() {
    return {
      productos: [], // Almacenará los productos de la API
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
      // Lógica para agregar un nuevo producto
      // Esto puede requerir otro método o un formulario de entrada
    },
  },
};
</script>
 
  
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>
