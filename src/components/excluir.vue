<template>

<a class="uk-link-heading" href="#modal-excluir" uk-toggle><span class="uk-margin-small-right" uk-icon="trash"></span>Excluir Conta</a>
<div id="modal-excluir" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical">
        <button class="uk-modal-close-default" type="button" uk-close></button>
        <div class="uk-modal-header">
            <h2 class="uk-modal-title">Excluir</h2>
        </div>
        <div class="uk-modal-body">
            <p>Você tem certeza que deseja excluir sua conta?</p>
        </div>
        <div class="uk-modal-footer uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
            <button class="uk-button uk-button-primary" type="button">Sim</button>
        </div>
    </div>
</div>
</template>