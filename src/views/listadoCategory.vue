<template>
    <div>
      <h2>Lista de Categorías</h2>
      <table v-if="categorias.length">
        <thead>
          <tr>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(categoria, index) in categorias" :key="index">
            <td v-if="!categoria.editing">{{ categoria.category }}</td>
            <td v-else><input v-model="categoria.category"></td>
  
            <td v-if="!categoria.editing">{{ categoria.description }}</td>
            <td v-else><input v-model="categoria.description"></td>
  
            <td>
              <button v-if="!categoria.editing" @click="editarCategoria(categoria)">Editar</button>
              <button v-if="categoria.editing" @click="guardarCambios(categoria)">Guardar</button>
              <button v-if="categoria.editing" @click="cancelarEdicion(categoria)">Cancelar</button>
              <button @click="eliminarCategoria(index)" class="btn-eliminar">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-state">
        <p>No hay categorías disponibles.</p>
      </div>
      <button @click="mostrarFormularioAgregarCategoria">Agregar Categoría</button>
  
      <b-modal v-model="mostrarModalAgregar" title="Agregar Nueva Categoría">
        <div class="modal-content">
          <b-form @submit.prevent="agregarCategoria">
            <b-form-group label="Nombre de la Categoría">
              <b-form-input v-model="nuevaCategoria.category" required></b-form-input>
            </b-form-group>
            <b-form-group label="Descripción de la Categoría">
              <b-form-input v-model="nuevaCategoria.description" required></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Agregar</b-button>
          </b-form>
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: "CategoriaListado",
  
    data() {
      return {
        categorias: [],
        mostrarModalAgregar: false,
        nuevaCategoria: {
          category: '',
          description: ''
        },
      };
    },
  
    mounted() {
      this.cargarCategorias();
    },
  
    methods: {
        cargarCategorias() {
      const URL = "https://real-gray-cheetah-fez.cyclic.app/categorias/categorias";
      axios.get(URL)
        .then(response => {
          console.log("Categorías cargadas:", response.data); // Agregado para depuración
          this.categorias = response.data.map(categoria => ({
            ...categoria,
            editing: false
          }));
        })
        .catch(error => {
          console.error("Error al cargar categorías:", error);
        });
    },
  
       editarCategoria(categoria) {
      categoria.editing = true;
    },
  
    guardarCambios(categoria) {
      const url = `https://real-gray-cheetah-fez.cyclic.app/categorias/categorias/${categoria._id}`;
      axios.put(url, {
        category: categoria.category,
        description: categoria.description
      })
      .then(response => {
        categoria.editing = false;
        this.actualizarCategoriaEnLista(response.data, categoria._id);
      })
      .catch(error => {
        console.error("Error al actualizar la categoría:", error);
      });
    },
    actualizarCategoriaEnLista(categoriaActualizada, id) {
      const index = this.categorias.findIndex(c => c._id === id);
      if (index !== -1) {
        this.$set(this.categorias, index, { ...categoriaActualizada, editing: false });
      }
    },

  
      cancelarEdicion(categoria) {
        categoria.editing = false;
        this.cargarCategorias();
      },
  
      eliminarCategoria(index) {
      const categoria = this.categorias[index];
      const url = `https://real-gray-cheetah-fez.cyclic.app/categorias/categorias/${categoria._id}`;

      axios.delete(url)
        .then(() => {
          this.categorias.splice(index, 1);
        })
        .catch(error => {
          console.error("Error al eliminar la categoría:", error);
        });
    },
  
      mostrarFormularioAgregarCategoria() {
        this.mostrarModalAgregar = true;
      },
  
      agregarCategoria() {
  axios.post('https://real-gray-cheetah-fez.cyclic.app/categorias/categorias/', this.nuevaCategoria)
    .then(response => {
      console.log(response);
      // Asumiendo que la respuesta del servidor es la categoría creada
      const categoriaCreada = response.data;
      this.categorias.push({
        ...categoriaCreada,
        editing: false
      });
      this.mostrarModalAgregar = false;
      this.nuevaCategoria = { category: '', description: '' };
    })
    .catch(error => {
      console.error("Error al agregar la categoría:", error);
    });
}

    },
  };
  </script>
  
  <style>
  /* Tus estilos existentes */
  .btn-eliminar {
    background-color: #c0392b;
    /* ... otros estilos ... */
  }
  
  /* ... otros estilos ... */
  </style>
  