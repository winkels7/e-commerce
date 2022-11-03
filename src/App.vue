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

        <div class="uk-container-small uk-background-primary uk-margin-large-top uk-flex uk-flex-between">
              
                <div class="uk-margin-top uk-margin-medium-left">
                        <h3 class="uk-text-muted">Politicas</h3>
                        <ul class="uk-text-muted uk-list">
                          <RouterLink to="/politicas" class="uk-link-heading"><li>Politicas de termos</li></RouterLink>
                          <RouterLink to="/politicas" class="uk-link-heading"><li>Politicas de Cookies</li> </RouterLink>   
                        </ul>
                </div>

                <div class="uk-margin-top">
                        <img src="./assets/logo.png" alt="logo" class="uk-width-1-2">
                </div>

    

</div>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import modal from "./components/modal.vue"
</script>

<style scoped>

</style>
