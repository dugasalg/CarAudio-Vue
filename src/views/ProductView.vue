<template>
    <div>
      <b-container>
        <b-row>
      <div class="product-form-container">
        <b-col></b-col>
        <b-col cols ="6">
        <b-card title="Add New Product">
          <b-form @submit.prevent="addProduct">
            <b-form-group label="Product Name">
              <b-form-input
                  v-model="productName"
                  type="text"
                  placeholder="Enter the product name"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Product Category">
              <b-form-input
                  v-model="productCategory"
                  type="text"
                  placeholder="Enter the product category"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Product Price">
              <b-form-input
                  v-model="productPrice"
                  type="number"
                  placeholder="Enter the product price"
                  required
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Product Description">
              <b-form-input
                  v-model="productDescription"
                  type="text"
                  placeholder="Enter the product description"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Product Image">
              <b-form-input
                  v-model="productImage"
                  type="text"
                  placeholder="Enter the Image URL"
                  required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Add Product</b-button>
          </b-form>
        </b-card>
    </b-col>
    <b-col></b-col>
      </div>
      </b-row>
     </b-container>  
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'ProductView',
    data() {
      return {
        productName: "",
        productCategory: "",
        productPrice: 0,
        productDescription: "",
        productImage:""
      }
    },
    methods: {
      async addProduct() {
        const requestBody = {
          product: this.productName,
          category: this.productCategory,
          price: this.productPrice,
          description: this.productDescription,
          image: this.productImage
        }
  
        try {
          const response = await axios.post('https://real-gray-cheetah-fez.cyclic.app/products/productos/', requestBody)
          console.log(response)
          // Handle the response here (e.g., clear form, show success message)
        } catch (error) {
          console.error(error)
          // Handle the error here (e.g., show error message)
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