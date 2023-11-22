<template>
  <div>
    <b-sidebar visible id="sidebar-1" title="Sidebar" shadow>
      Ventanas de catalogo
    </b-sidebar>
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