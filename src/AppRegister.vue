<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="6">
          <b-card title="Register">
            <b-form @submit.prevent="register">
              <b-form-group label="First Name">
                <b-form-input
                    v-model="firstName"
                    placeholder="Enter your first name"
                    required
                ></b-form-input>
              </b-form-group>

              <b-form-group label="Last Name">
                <b-form-input
                    v-model="lastName"
                    placeholder="Enter your last name"
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
import axios from 'axios'

export default {
  name: 'Register-form',
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: ""
    }
  },
  methods: {
    async register() {
      const requestBody = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        username: this.username,
        password: this.password
      }

      try {
        const response = await axios.post('https://distinct-fish-polo-shirt.cyclic.app/users/registrar', requestBody)
        console.log(response)
        // Handle post registration logic (like redirecting to login page)
      } catch (error) {
        console.error(error)
        // Handle errors (like displaying error message)
      }
    }
  }
}
</script>

<style>
/* You can use the same styles as your login form */
</style>
