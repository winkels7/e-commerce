<template>
  <div class="uk-child-width-1-2@s" uk-grid>
    <div>
        <div uk-grid>
            <div class="uk-width-auto@m">
                <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                    <li><RouterLink to="/privacidade">Politica de Privacidade</RouterLink></li>
                    <li><a href="/cookies">Política de cookies</a></li>
                </ul>
            </div>
            <div class="uk-width-expand@m">
                <ul id="component-tab-left" class="uk-switcher">
                    <li>Ola</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li>
                </ul>
            </div>
        </div>
    </div>
    
</div>

</template>