
<template>
<li><a class="" href="#modal-full" uk-toggle><span class="uk-margin-small-right" uk-icon="sign-in"></span>Entrar</a></li>
<div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-background-image@xl uk-background-cover" uk-height-viewport></div>
            <div class="uk-padding-large">
              <div class="uk-flex uk-flex-center">
              <form>
                  <h3 class="uk-text-center">Login</h3>
                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon" uk-icon="icon: user"></span>
                          <input class="uk-input" type="text" placeholder="E-mail" name="email" v-model="email" aria-label="Not clickable icon">
                      </div>
                  </div>

                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                          <input class="uk-input" type="password" placeholder="Senha" name="senha" v-model="senha" aria-label="Not clickable icon">
                      </div>
                  </div>
                  <div class="uk-flex uk-flex-column">
                  <a class="uk-text-secondary uk-button-text uk-text-center uk-link-heading" href="#modal-center" uk-toggle>Esqueci a senha</a>
                  <a class="uk-text-secondary uk-button-text uk-text-center uk-link-heading uk-margin-small-top" href="#modal-sections" uk-toggle>Primeira vez aqui?<strong> Criar conta</strong></a>
                  </div>
                  <div id="modal-center" class="uk-modal-full" uk-modal>
                        <div class="uk-modal-dialog">
                            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div class="uk-grid-collapse uk-child-width-1-2@m uk-flex-middle" uk-grid>
                                <div class="uk-background-cover uk-background-image@s" uk-height-viewport></div>
                                <div class="uk-padding-large">
                                  <div class="uk-flex uk-flex-column">
                                  <h3 class="uk-text-center uk-margin-medium-bottom">Recuperar senha</h3>
                                  <div class="uk-inline">
                          <span class="uk-form-icon" uk-icon="icon: mail"></span>
                          <input class="uk-input uk-width-1-1" type="email" placeholder="Informe seu e-mail" aria-label="Not clickable icon">
                                    
                        </div>
                        <a class="uk-button uk-button-secondary uk-width-1-1 uk-margin-medium-top">Enviar</a>
                        <a class="uk-text-secondary uk-button-text uk-text-center uk-link-heading uk-margin-small-top uk-width-1-3 uk-align-center" href="#modal-full" uk-toggle>voltar</a>

                      </div>                                
                    </div>
                            </div>
                        </div>
                        
                    </div>
                            <button @on-click="login" class="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-top">Entrar</button>

                  </form>
                </div>

              </div>
        </div>
    </div>
</div>

</template>

<script>
import AuthService from '../services/AuthService';
  export default{
    data() {
      return {
        email: '',
        senha: ''
      }
    },
  methods: {
    async login (){
      const response = await AuthService.login({
        email: this.email,
        senha: this.senha
      })
      console.log(response.data)
    }
  }
}
</script>
