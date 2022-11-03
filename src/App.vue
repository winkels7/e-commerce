<template>

        <div class="uk-container uk-container-expand uk-background-primary">
                <nav class="uk-navbar ">
                        <div class="uk-navbar-left">
                            <RouterLink to="/"><img src="./assets/logo.png" class="uk-width-1-3" alt=""></RouterLink>
                        </div>
                        <div class="uk-navbar-right">
                                <ul class="uk-navbar-nav uk-visible@m">
                                        <li><RouterLink to="/">Home</RouterLink></li>
                                        <li><RouterLink to="/login">Login</RouterLink></li>
                                        <li><RouterLink to="/checkout" uk-icon="cart"></RouterLink></li>
                                        <li><RouterLink to="/user" uk-icon="user"></RouterLink></li>
                                </ul>
                        </div>
                </nav>
        </div>
        
        <RouterView />

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import modal from "./components/modal.vue"
</script>

<style scoped>

</style>
