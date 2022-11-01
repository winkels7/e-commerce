<template>
        <div class="uk-container uk-container-expand uk-background-primary">
                <nav class="uk-navbar ">
                        <div class="uk-navbar-left">
                            <RouterLink to="" uk-icon="joomla" class="uk-text-muted"></RouterLink>
                        </div>
                        <div class="uk-navbar-right">
                                <ul class="uk-navbar-nav uk-visible@m">
                                        <li><RouterLink to="">Home</RouterLink></li>
                                        <li><RouterLink to="">Login</RouterLink></li>
                                        <li><RouterLink to="" uk-icon="cart"></RouterLink></li>
                                        <li><RouterLink to="" uk-icon="user"></RouterLink></li>
                                </ul>
                        </div>
                </nav>
        </div>
        <header>
                <div class="wrapper">
                        <HelloWorld msg="You did it!" />

                        <nav>
                                <RouterLink to="/">Home</RouterLink>
                                <RouterLink to="/about">About</RouterLink>
                                
                        </nav>
                </div>
        </header>

        <div>
                <button
                        uk-toggle="target: #my-id"
                        type="button"
                        class="uk-button uk-button-primary"
                >
                        Abrir Modal
                </button>
                <!-- This is the modal -->
                <div id="my-id" uk-modal>
                        <div class="uk-modal-dialog uk-modal-body">
                                <h2 class="uk-modal-title">Isso é um Modal</h2>
                                <div class="uk-padding-large">
                                        <RouterView />
                                </div>
                        </div>
                </div>
        </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>

</style>
