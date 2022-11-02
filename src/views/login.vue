
<template>
<div>
  <h1>login page</h1>
  <li><RouterLink to="/register">register</RouterLink></li>
  <a class="uk-button uk-button-default" href="#modal-center" uk-toggle>Recuperar senha</a>

<div id="modal-center" class="uk-flex-top" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button class="uk-modal-close-default" type="button" uk-close></button>
      <label >email
         <input type="email" placeholder="informe o email">
        </label>
    </div>
</div>
</div>
</template>

<script>
</script>
