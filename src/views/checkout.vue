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
    export default {
        methods: {
            mostrarCarrinho() {
                const transaction = db.transaction(['ingressos'])
                const objectStore = transaction.objectStore('ingressos')
                
                const request = objectStore.get('Inteiro')

                var quantInteiro = request.result.quantidade
                var precoInteiro = request.result.preco

                request.onerror = (event) => {
                    alert(`Falha ao buscar informações no banco de dados`)
                }

                request.onsuccess = (event) => {
                    if(quantInteiro > 0 ) {
                        console.log(`Produto: ${request.result.tipo}<br>Tour: ${request.result.tour}<br>Quantidade: ${request.result.quantidade}`)
                    }
                }

                var quantMeia = request.result.quantidade
                var precoMeia = request.result.preco

                request.onerror = (event) => {
                    alert(`Falha ao buscar informações no banco de dados`)
                }

                request.onsuccess = (event) => {
                    if(quantMeia > 0 ) {
                        console.log(`Produto: ${request.result.tipo}<br>Tour: ${request.result.tour}<br>Quantidade: ${request.result.quantidade}`)
                    }
                }
            }
        }
    }
</script>