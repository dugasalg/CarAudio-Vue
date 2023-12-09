<template>
    <b-container>
      <b-row>
        <b-col cols="12" md="8" lg="6" class="mx-auto">
          <b-card title="Editar Usuario">
            <b-form @submit.prevent="updateUser">
              <!-- Campo de nombre de usuario -->
              <b-form-group label="Nombre de Usuario">
                <b-form-input v-model="user.username" required></b-form-input>
              </b-form-group>
  
              <!-- Campo de contraseña -->
              <b-form-group label="Contraseña (dejar en blanco para no cambiarla)">
                <b-form-input type="password" v-model="user.password"></b-form-input>
              </b-form-group>
  
              <!-- Campo de fecha de nacimiento -->
              <b-form-group label="Fecha de Nacimiento">
                <b-form-input type="date" v-model="user.birthDate"></b-form-input>
              </b-form-group>
  
              <!-- Campo de dirección -->
              <b-form-group label="Dirección">
                <b-form-input type="text" v-model="user.address"></b-form-input>
              </b-form-group>
  
              <b-button type="submit" variant="primary">Guardar Cambios</b-button>
              <b-button variant="secondary" @click="$router.go(-1)">Cancelar</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserEditView',
    data() {
      return {
        user: {
          username: '',
          password: '',
          birthDate: '',
          address: ''
        }
      };
    },
    methods: {
      async updateUser() {
        try {
          const userId = this.$route.params.userId; // Asegúrate de obtener el ID del usuario adecuado
          await axios.put(`http://localhost:3000/users/usuario/${userId}`, this.user);
          alert("Usuario actualizado con éxito");
          // Redirige o actualiza la vista según sea necesario
        } catch (error) {
          console.error("Error al actualizar el usuario:", error);
        }
      }
    }
  };
  </script>
  
  <style>
  /* Estilos si son necesarios */
  </style>
  