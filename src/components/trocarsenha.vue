<template>

  <a class="uk-link-heading" href="#modal-senha" uk-toggle><span class="uk-margin-medium-left uk-margin-small-right" uk-icon="settings"></span>Trocar Senha</a>
  <div id="modal-senha" class='uk-flex-top' uk-modal>
      <div class="uk-modal-dialog uk-margin-auto-vertical">
          <button class="uk-modal-close-default" type="button" uk-close></button>
          <div class="uk-modal-header">
              <h2 class="uk-modal-title">Trocar Senha</h2>
          </div>
          <div class="uk-modal-body uk-text-center">
           <label>
            <p>Digite a nova senha</p>
            <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" placeholder="Senha" aria-label="Not clickable icon">
                    </div>
                </div>
           </label>

           <label>
            <p>Digite Novamente</p>
            <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" placeholder="Senha" aria-label="Not clickable icon">
                    </div>
                </div>
           </label>

          </div>
          <div class="uk-modal-footer uk-text-right">
              <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
              <button class="uk-button uk-button-primary" type="button">Confirmar</button>
          </div>
      </div>
  </div>
  </template>