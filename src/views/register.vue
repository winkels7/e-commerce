<template>
  <div>
    <h1>register page</h1>

    <input type="email" name="email" v-model="email" placeholder="E-mail">
    <input type="password" name="password" v-model="password" placeholder="Senha">
    <button @click="register">Registrar</button>
  </div>
  </template>

  <script>
  import AuthService from '../services/AuthService';
    export default{
      data() {
        return {
          email: '',
          password: ''
        }
      },
    methods: {
      async register (){
        const response = await AuthService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    }
  }
  </script>

  <script setup>

  
  
  </script>