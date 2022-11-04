<template>
   <div
    class="uk-container-large uk-background-secondary uk-flex uk-flex-around "
  >
  <div
    class="uk-container uk-container-medium uk-background-muted uk-width-1-2 uk-margin-large-top uk-border-rounded uk-overflow-auto"
  >

  <h3 class="uk-margin-small-top">Produtos</h3>
  <hr class="uk-divider-small">
  <div class="uk-overflow-auto">
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
  <div
  class="uk-container uk-container-medium uk-background-muted uk-width-1-4 uk-margin-large-top  uk-border-rounded"
  >
    <h3 class="uk-margin-small-top">Pedido</h3>
    <hr class="uk-divider-small">
    <div class="uk-flex uk-flex-between">
      <div>
      <h4> <strong>Total</strong></h4>
    </div>
    
    <div>
      <p>R$ 0,00</p>
    </div>

    </div>

    <div class="uk-flex uk-flex-between ">

      <div>
      <h4> <em>Subtotal (1 item)</em></h4>
    </div>
    
    <div>
      <p class="uk-text-top">R$ 0,00</p>
    </div>

    </div>
    <button class="uk-button uk-button-primary uk-margin-small-right uk-border-rounded uk-margin-medium-bottom uk-margin-medium-top" type="button" uk-toggle="target: #modal-example">Finalizar Pedido</button>
    <a class="uk-button uk-button-secondary uk-border-rounded" onclick="window.print()"> <span class="uk-margin-small-right" uk-icon="print"></span>Imprimir</a>
   
    <div id="modal-example" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" uk-close></button>

        <h2 class="uk-modal-title">Forma de Pagamento</h2>
        <div class="uk-margin">
            <select class="uk-select" aria-label="Select">
                <option>Cartão</option>
                <option>Boleto</option>
                <option>Pix</option>
              </select>
        </div>

        
        <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Cancelar</button>
            <button class="uk-button uk-button-primary" type="button">Concluir</button>
        </p>
    </div>
</div>

  </div>
  </div>
  <div class="uk-container uk-container-small uk-background-secondary">
    
  </div>
</template>

<script>
    //export default {
        /*created: function () {
            this.mostrarCarrinho()
        },
        methods: {
            mostrarCarrinho() */

            /*mounted() {
                alert('entrou')
                // var everything = require('./HomeView.vue')

                var transaction = db.transaction('ingressos', 'readonly')
                
                transaction.oncomplete = (event) => {
                    // wut
                    // alert(`transação completa`)
                    console.log(`transação completa`)
                };

                var objectStore = transaction.objectStore('ingressos')
                
                // objectStore.orderBy(Key)
                //const request = objectStore.get('ingressos')
                var request2 = objectStore.getAll()

                request2.onsuccess = (event) => {
                    let eventTarget = ev.target
                    // alert(`${eventTarget}`)
                    console.log(`${eventTarget}`)
                }

                request2.onerror = (event) => {
                    // alert(`Falha ao buscar informações no banco de dados`)
                    console.log(`Falha ao buscar informações no banco de dados`)
                }

                /////////////////////////////////////////////////
                /*
                var quantInteiro = request.result.inteiro
                var quantMeia = request.result.meia
                var quantPcd = request.result.pcd
                var precoInteiro = request.result.precoInt
                var precoMei = request.result.precoMei
                var tour = request.result.tour

                /*request.onerror = (event) => {
                    alert(`Falha ao buscar informações no banco de dados`)
                }*/
                /*
                request.onsuccess = (event) => {
                    if(quantInteiro > 0 ) {
                        console.log(`Produto: Entrada inteira<br>Quantidade: ${quantInteiro}<br>Tour: ${tour}`)
                    }
                    if(quantMeia > 0) {
                        console.log(`Produto: Meia entrada<br>Quantidade: ${quantMeia}<br>Tour: ${tour}`)
                    }
                    if(quantPcd > 0) {
                        console.log(`Produto: Entrada PCD<br>Quantidade: ${quantPcd}<br>Tour: ${tour}`)
                    }
                }*/
            //}

        //}
    /*}*/
</script>