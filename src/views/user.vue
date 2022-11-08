<template>
  <div class="uk-container-expand uk-background-secondary uk-height-viewport uk-background-image@xl uk-background-cover uk-background-default uk-flex ">
    
<div class="uk-container uk-container-small uk-height-viewport uk-background-primary uk-width-1-4 uk-margin-medium-top  uk-border-rounded uk-box-shadow-large uk-margin-medium-bottom uk-position-relative"       
data-aos="fade-right"
data-aos-duration="1000"
>
  <div class="uk-flex uk-flex-column">
          <div class="uk-flex">
        <span uk-icon="icon: user" width="80" class="uk-text-muted uk-margin-medium-top"></span>
        <h4 class="uk-text-muted uk-margin-large-top uk-margin-left">UserName</h4>
      </div>
        <article class="article">

          <div class="uk-width-1-1 uk-margin-auto uk-margin-medium-top">
          <h4 class="uk-text-muted"><strong> Nome completo </strong><br>
             <em class="uk-text-muted"> Francisco de Paulo </em></h4>
            <hr class="uk-divider-small">

          <h4 class="uk-text-muted"><strong> E-mail </strong><br>
             <em class="uk-text-muted">francisco@mail.com </em></h4>
            <hr class="uk-divider-small">

          <h4 class="uk-text-muted"><strong>Telefone </strong><br>
             <em class="uk-text-muted"> (xx) xxxxx-xxxx </em></h4>
            <hr class="uk-divider-small uk-margin-medium-bottom">
            

            <div class="uk-text-muted uk-margin-small-right uk-width-1-1">
            <!-- <a class="uk-link-heading" href="#modal-group-1" ><span class="uk-margin-small-right" uk-icon="trash"></span>Excluir Conta</a> -->
              <excluir></excluir>
              <senha></senha>
            <!-- <a class="uk-link-heading" ><span class="uk-margin-medium-left uk-margin-small-right" uk-icon="settings"></span>Trocar Senha</a> -->

          </div>

        
            
        </div>
        </article>


      </div>
  
</div>

<div class="uk-container uk-container-large uk-background-muted uk-width-1-2 uk-margin-medium-top uk-margin-medium-bottom uk-border-rounded uk-overflow-auto uk-box-shadow-large" data-aos="fade-left" data-aos-duration="1000">
<h2 class="uk-margin-top"><em>Histórico de Compras</em></h2>
<table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
            <tr>
                <th class="uk-table-shrink">1º</th>
                <th class="uk-table-shrink"></th>
                <th class="uk-table-expand">Tipo de produto</th>
                <th class="uk-width-shrink">Data</th>
                <th class="uk-width-shrink">Valor</th>
                <th class="uk-table-shrink uk-text-nowrap">Quantidade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td><img class="uk-preserve-width uk-border-circle" src="../assets/Icone-ticket-Png-removebg-preview (1).png" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="uk-link-reset" href=""> <strong>Histórico</strong><br>
                      Meia-Entrada</a>
                </td>
                <td class="uk-text-truncate">05/11/2022</td>
                <td class="uk-text-nowrap">R$ 6,00</td>
                <td class="uk-text-nowrap uk-text-center">1</td>
            </tr>
            

           
        </tbody>
        
    </table>
    <a class="uk-button uk-button-secondary uk-border-rounded">Remover</a>

</div>

</div>
<!-- <div class="uk-container uk-container-xlarge uk-background-secondary">
    
  </div> -->


  
</template>

<script setup>
import excluir from "../components/excluir.vue"
import senha from "../components/trocarsenha.vue"
</script>