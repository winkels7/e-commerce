<template>

        <div class="uk-container uk-container-expand uk-background-primary">
                <nav class="uk-navbar " uk-navbar>
                        <div class="uk-navbar-left">
                            <RouterLink to="/"><img src="./assets/logo.png" class="uk-width-1-3" alt=""></RouterLink>
                        </div>
                        <div class="uk-navbar-right">
                                <ul class="uk-navbar-nav uk-visible@m">
                                        <li><RouterLink to="/" uk-icon="home"></RouterLink></li>
                                        <!-- <li><RouterLink to="/login">Login</RouterLink></li> -->
                                        <li><RouterLink to="/checkout" uk-icon="cart"></RouterLink></li>
                                        <!-- <li><RouterLink to="/user" uk-icon="user"></RouterLink></li> -->
                                        <li><RouterLink to="/user" uk-icon="user"></RouterLink>
                                                <div class="uk-navbar-dropdown">
                                                        <ul class="uk-nav uk-navbar-dropdown-nav">
                                                                <li><RouterLink to="/login"> <span class="uk-margin-small-right" uk-icon="sign-in"></span>Fazer login</RouterLink></li>
                                                                <li><RouterLink to="/login"><span class="uk-margin-small-right" uk-icon="plus"></span>Criar conta</RouterLink></li>
                                                                <li><a href="#"> <span class="uk-margin-small-right" uk-icon="sign-out"></span>Sair</a></li>
                                                        </ul>
                                                </div>
                                        </li>
                                </ul>
                        </div>
                </nav>
        </div>
        
        <RouterView />

        <div class="uk-container-small uk-background-primary  uk-flex uk-flex-between">
              
                <div class="uk-margin-top uk-margin-medium-left">
                        <h3 class="uk-text-muted">Políticas</h3>
                        <ul class="uk-text-muted uk-list">
                          <RouterLink to="/privacidade" class="uk-link-heading"><li>Políticas de Privacidade</li></RouterLink>
                          <RouterLink to="/cookies" class="uk-link-heading"><li>Política de cookies</li> </RouterLink>
                          <RouterLink to="/institucional" class="uk-link-heading"><li>Institucional</li> </RouterLink>   
                        </ul>
                </div>

                <div class="uk-margin-top">
                        <img src="./assets/logo.png" alt="logo" class="uk-width-1-2">
                </div>

                
    

</div>
<a href="#my-id" uk-scroll uk-totop class="uk-position-bottom-right uk-position-fixed uk-margin-medium-right uk-margin-medium-bottom"></a>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import modal from "./components/modal.vue"




</script>

<style scoped>

</style>
