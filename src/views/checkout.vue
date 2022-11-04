<template>
   <div
    class="uk-container-large uk-background-secondary uk-flex uk-flex-around "
  >
  <div
    class="uk-container uk-container-medium uk-background-muted uk-width-1-2 uk-margin-large-top uk-border-rounded uk-overflow-auto"
  >

  <h3>Produtos</h3>
  <div class="uk-overflow-auto">
    <table class="uk-table uk-table-hover uk-table-middle uk-table-divider">
        <thead>
            <tr>
                <th class="uk-table-shrink"></th>
                <th class="uk-table-shrink">Preserve</th>
                <th class="uk-table-expand">Expand + Link</th>
                <th class="uk-width-small">Truncate</th>
                <th class="uk-table-shrink uk-text-nowrap">Shrink + Nowrap</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td><img class="uk-preserve-width uk-border-circle" src="images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="uk-text-nowrap">Lorem ipsum dolor</td>
            </tr>
            <tr>
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td><img class="uk-preserve-width uk-border-circle" src="images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="uk-text-nowrap">Lorem ipsum dolor</td>
            </tr>
            <tr>
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td><img class="uk-preserve-width uk-border-circle" src="images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="uk-text-nowrap">Lorem ipsum dolor</td>
            </tr>
            <tr>
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td><img class="uk-preserve-width uk-border-circle" src="images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="uk-text-nowrap">Lorem ipsum dolor</td>
            </tr>

            <tr>
                <td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"></td>
                <td><img class="uk-preserve-width uk-border-circle" src="images/avatar.jpg" width="40" height="40" alt=""></td>
                <td class="uk-table-link">
                    <a class="uk-link-reset" href="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</a>
                </td>
                <td class="uk-text-truncate">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                <td class="uk-text-nowrap">Lorem ipsum dolor</td>
            </tr>
        </tbody>
    </table>
</div>


  </div>
  <div
  class="uk-container uk-container-medium uk-background-muted uk-width-1-4 uk-margin-large-top  uk-border-rounded"
  >

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