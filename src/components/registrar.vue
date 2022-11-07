<template>
  
  <li><a class="" href="#modal-sections" uk-toggle><span class="uk-margin-small-right" uk-icon="plus"></span>Criar Conta</a></li>

  <div id="modal-sections" class="uk-modal-full" uk-modal>
                        <div class="uk-modal-dialog">
                            <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
                                <div class="uk-background-cover uk-background-image@m" uk-height-viewport></div>
                                <div class="uk-padding-medium">
                <div class="uk-flex uk-flex-column">
    
                    <h3 class="uk-text-center">Cadastrar Usuário</h3>
                  
                 <div class="uk-text-center">   
                  <form>
                  
                    <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon" uk-icon="icon: mail"></span>
                          <input class="uk-input" type="email" placeholder="Informe seu e-mail" aria-label="Not clickable icon">
                      </div>
                  </div>
                                   <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon" uk-icon="icon: user"></span>
                          <input class="uk-input" type="text" placeholder="Informe seu Nome" aria-label="Not clickable icon">
                      </div>
                  </div>

                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon uk-form-icon" uk-icon="icon: lock"></span>
                          <input class="uk-input" type="password" placeholder="Digite uma senha" aria-label="Not clickable icon">
                      </div>
                  </div>
                  
                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon uk-form-icon" uk-icon="icon: tag"></span>
                          <input class="uk-input" type="number" placeholder="Informe seu cpf" aria-label="Not clickable icon">
                      </div>
                  </div>

                  <div class="uk-margin">
                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid uk-align-center">
                        <label><input class="uk-radio" type="radio" name="radio2" checked> Masculino</label>
                        <label><input class="uk-radio" type="radio" name="radio2"> Feminino</label>
                    </div>
                  </div>


                  <div class="uk-margin">
                      <div class="uk-inline">
                          <span class="uk-form-icon uk-form-icon" uk-icon="icon: receiver"></span>
                          <input class="uk-input" type="tel" placeholder="Número de telefone" pattern="[+]{1}[0-9]{11,14}" required aria-label="Not clickable icon">
                      </div>
                  </div>
                  <div class="uk-flex uk-flex-column">
                  <a class="uk-button uk-button-secondary uk-width-1-3 uk-align-center uk-margin-small-top">Cadastrar</a>
                  <a class="uk-text-secondary uk-button-text uk-text-center uk-link-heading uk-margin-small-top uk-width-1-3 uk-align-center" href="#modal-full" uk-toggle>voltar</a>
                </div>
                </form>
              </div>
                </div>
                  
                </div>
                            </div>
                        </div>
                    </div>
  </template>