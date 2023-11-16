<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="6">
          <b-card title="Register">
            <b-form @submit.prevent="registerUser">
              <b-form-group label="Username">
                <b-form-input
                    v-model="username"
                    placeholder="Enter your username"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Password">
                <b-form-input
                    v-model="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Email">
                <b-form-input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Birth Date">
                <b-form-input
                    v-model="birthDate"
                    type="date"
                    placeholder="Enter your birth date"
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Address">
                <b-form-input
                    v-model="address"
                    placeholder="Enter your address"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Register</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AppRegister',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      birthDate: '',
      address: ''
    }
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('https://distinct-fish-polo-shirt.cyclic.app/users/iniciar-sesion', {
          usrn: this.username,
          password: this.password,
          email: this.email,
          birthDate: this.birthDate,
          address: this.address
        });
        console.log(response.data);
        // Aquí puedes redireccionar al usuario o mostrar un mensaje de éxito
      } catch (error) {
        console.error(error);
        // Manejar el error, mostrar mensaje al usuario, etc.
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
