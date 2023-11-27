<template>
  <div>
    <b-container>
      <b-row>
        <b-col></b-col>
        <b-col cols="6">
          <b-card title="Category">
            <b-form @submit="createCategory">
              <b-form-group
                  label="Category Name"
              >
                <b-form-input
                    v-model="catName"
                    type="text"
                    placeholder="Enter the Category Name"
                    required
                ></b-form-input>
              </b-form-group>
              <br>
              <b-form-group
                  label="Category Description"
              >
                <b-form-input
                    v-model="catDes"
                    type="text"
                    placeholder="Add a description for Category"
                    required
                ></b-form-input>
              </b-form-group>
              <br>
              <b-button type="submit" variant="primary">Add</b-button>
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
  name: 'App',
  data() {
    return {
      catName:"",
      catDes:""
    }
  },
  methods: {
    async createCategory(event){
      event.preventDefault()
      const requestBody = {
        category: this.catName,
        description: this.catDes
      }

      try {
        const response = await axios.post('https://real-gray-cheetah-fez.cyclic.app/categorias/categorias/', requestBody)
        console.log(response)
        // Handle the successful category addition here
      } catch (error) {
        console.error(error)
        // Handle errors here
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