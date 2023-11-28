<template>
  <div>
    <b-sidebar visible id="sidebar-1" title="Sidebar" shadow>
      Ventanas de catalogo
      <br>
      <ul>
      <li><router-link to="dashboard/category">Category</router-link></li>
      <li><router-link to="dashboard/listado">Lista de Productos</router-link></li>
      <li><router-link to="dashboard/products">Agregar producto</router-link></li>
      </ul>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      username:"",
      pass:""
    }
  },
  methods: {
    async login(event){
      event.preventDefault()
      const requestBody = {
      usrn: this.username,
      password: this.pass
      }

      try {
        const response = await axios.post('https://real-gray-cheetah-fez.cyclic.appusers/iniciar-sesion', requestBody)
        console.log(response)
      } catch (error) {
        console.error(error)
      }

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>