<template>
  <div>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="6">
          <b-card title="Login">
            <b-form @submit="login">
              <b-form-group
                  label="Username"
              >
                <b-form-input
                    v-model="username"
                    placeholder="Enter your username"
                    required
                ></b-form-input>
              </b-form-group>
              <br>
              <b-form-group
                  label="Password"
              >
                <b-form-input
                    v-model="pass"
                    type="password"
                    placeholder="Enter your password"
                    required
                ></b-form-input>
              </b-form-group>
              <br>
              <b-button type="submit" variant="primary">Login</b-button>
            </b-form>
            <router-link to="/register">Register</router-link>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  components: {

  },
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
        const response = await axios.post('https://real-gray-cheetah-fez.cyclic.app/users/iniciar-sesion', requestBody);
        console.log(response);
        if (response && response.data && response.data.jwt) {
          localStorage.setItem("jwt", response.data.jwt);
          alert("Login exitoso");  
          this.router.push({name: "Dashboard"})
        }
        else {
          alert("Login fallido");
        }
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