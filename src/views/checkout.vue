<template>
  <div id="app"
    class="uk-container-expand uk-background-secondary uk-flex uk-flex-around uk-height-viewport"
  >
    <div
      class="uk-container uk-container-medium uk-background-muted uk-width-1-2 uk-margin-large-top uk-border-rounded uk-overflow-auto uk-margin-large-bottom"
      data-aos="fade-right"
      data-aos-duration="1000"

      >
      <h3 class="uk-margin-small-top">Produtos</h3>
      <hr class="uk-divider-small" />
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
              <td>
                <input
                  class="uk-checkbox"
                  type="checkbox"
                  aria-label="Checkbox"
                />
              </td>
              <td>
                <img
                  class="uk-preserve-width uk-border-circle"
                  src="../assets/Icone-ticket.png"
                  width="40"
                  height="40"
                  alt=""
                />
              </td>
              <td class="uk-table-link">
                <a class="uk-link-reset" href="">
                  <strong id="tourEsc">{{ tour }}</strong><br />
                  <span id="ingressoEsc">{{ inteira }}</span></a
                >
              </td>
              <td id="dataEsc" class="uk-text-truncate">{{ calendario }}</td>
              <td id="precoEsc" class="uk-text-nowrap">{{ preco }}</td>
              <td id="quantEsc" class="uk-text-nowrap uk-text-center">{{ quant }}</td>
            </tr>
          </tbody>
          <!---->
          <tbody>
            <tr id="segundaLinha">
              <!-- conteúdo aqui se a pessoa escolher dois tipos diferentes de ingresso -->
            </tr>
          </tbody>
          <!---->
          <!---->
          <tbody>
            <tr id="terceiraLinha">
              <!-- conteúdo aqui se a pessoa escolher três tipos diferentes de ingresso -->
            </tr>
          </tbody>
          <!---->
        </table>
        <a class="uk-button uk-button-secondary uk-border-rounded">Remover</a>
      </div>
    </div>
    <div
      class="uk-container uk-container-medium uk-background-muted uk-width-1-4 uk-margin-large-top uk-border-rounded uk-margin-large-bottom"
      data-aos="fade-left"
      data-aos-duration="1000"

      >
      <h3 class="uk-margin-small-top">Pedido</h3>
      <hr class="uk-divider-small" />
      <div class="uk-flex uk-flex-between">
        <div>
          <h4><strong>Total</strong></h4>
        </div>

        <div id="totalValorEsc">
          <p>R$ 0,00</p>
        </div>
      </div>

      <div class="uk-flex uk-flex-between">
        <div>
          <h4><em id="subtotalEsc">Subtotal (1 item)</em></h4>
        </div>

        <div>
          <p id="subtotalValorEsc"  class="uk-text-top">R$ 0,00</p>
        </div>
      </div>

      <button
        class="uk-button uk-button-primary uk-margin-small-right uk-border-rounded uk-margin-medium-bottom uk-margin-medium-top"
        type="button"
        uk-toggle="target: #modal-example"
      >
        Finalizar Pedido
      </button>

      <a
        class="uk-button uk-button-secondary uk-border-rounded"
        onclick="window.print()"
      >
        <span class="uk-margin-small-right" uk-icon="print"></span>Imprimir</a
      >

      <div id="modal-example" uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default"
            type="button"
            uk-close
          ></button>

          <h2 class="uk-modal-title">Forma de Pagamento</h2>
          <div class="uk-margin">
            <select class="uk-select" aria-label="Select">
              <option>Cartão</option>
              <option>Boleto</option>
              <option>Pix</option>
            </select>
          </div>

          <p class="uk-text-right">
            <button
              class="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              Cancelar
            </button>
            <button class="uk-button uk-button-primary" type="button">
              Concluir
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="uk-container uk-container-small uk-background-secondary"></div> -->
</template>

<script>
const connection = indexedDB.open('ingressos', 2);

connection.onsuccess = (event) => {
  const database = event.target.result;
  const transaction = database.transaction(['ingressos']);
  const objectStore = transaction.objectStore('ingressos');

  const request = objectStore.getAll()

  request.onsuccess = (event) => {
    const array = request.result

    const calendario = array[0]
    const tour = array[1]
    const inteira = array[2]
    const meia = array[3]
    const pcd = array[4]

    console.warn(`CALENDÁRIO: ${calendario}`)
    console.warn(`TOUR: ${tour}`)
    console.warn(`INTEIRA: ${inteira}`)
    console.warn(`MEIA: ${meia}`)
    console.warn(`PCD: ${pcd}`)

    var ano  = calendario.split("-")[0];
    var mes  = calendario.split("-")[1];
    var dia  = calendario.split("-")[2];

    var novoCalendario = dia + '/' + mes + '/' + ano

    console.warn(`CALENDÁRIO NOVO: ${novoCalendario}`)
    
    // ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2)
    
    const maisLinhas = '<tr><td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"/></td><td><img class="uk-preserve-width uk-border-circle" src="../assets/Icone-ticket.png" width="40" height="40" alt=""/></td><td class="uk-table-link"><a class="uk-link-reset" href=""><strong id="tour2Esc">{{ tour }}</strong><br /><span id="ingresso2Esc">{{ inteira }}</span></a></td><td id="data2Esc" class="uk-text-truncate">{{ calendario }}</td><td id="preco2Esc" class="uk-text-nowrap">{{ preco }}</td><td id="quant2Esc" class="uk-text-nowrap uk-text-center">{{ quant }}</td></tr>'
    const mais3Linhas = '<td><input class="uk-checkbox" type="checkbox" aria-label="Checkbox"/></td><td><img class="uk-preserve-width uk-border-circle" src="../assets/Icone-ticket.png" width="40" height="40" alt=""/></td><td class="uk-table-link"><a class="uk-link-reset" href=""><strong id="tour3Esc">{{ tour }}</strong><br /><span id="ingresso3Esc">{{ inteira }}</span></a></td><td id="data3Esc" class="uk-text-truncate">{{ calendario }}</td><td id="preco3Esc" class="uk-text-nowrap">{{ preco }}</td><td id="quant3Esc" class="uk-text-nowrap uk-text-center">{{ quant }}</td>'

    const valorTotal = (inteira*12) + (meia*6) + (pcd*6)
    const quantTotal = inteira + meia + pcd

    document.getElementById('tourEsc').innerHTML = tour

    document.getElementById('totalValorEsc').innerHTML = 'R$ ' + valorTotal + ',00'
    document.getElementById('subtotalValorEsc').innerHTML = 'R$ ' + valorTotal + ',00'
    document.getElementById('subtotalEsc').innerHTML = 'Subtotal (' + quantTotal +' itens)'

    if (inteira > 0 && meia <= 0 && pcd <= 0) {
      document.getElementById('ingressoEsc').innerHTML = 'Entrada inteira'
    } else if (inteira <= 0 && meia > 0 && pcd <= 0) {
      document.getElementById('ingressoEsc').innerHTML = 'Meia entrada'
    } else if (inteira <= 0 && meia <= 0 && pcd > 0) {
      document.getElementById('ingressoEsc').innerHTML = 'Entrada PCD'
    }

    document.getElementById('dataEsc').innerHTML = novoCalendario

    if (inteira > 0 && meia <= 0 && pcd <= 0) {
      document.getElementById('precoEsc').innerHTML = 'R$ 12,00'
    } else if (inteira <= 0 && meia > 0 && pcd <= 0) {
      document.getElementById('precoEsc').innerHTML = 'R$ 6,00'
    } else if (inteira <= 0 && meia <= 0 && pcd > 0) {
      document.getElementById('precoEsc').innerHTML = 'R$ 6,00'
    }

    if (inteira > 0 && meia <= 0 && pcd <= 0) {
      document.getElementById('quantEsc').innerHTML = inteira
    } else if (inteira <= 0 && meia > 0 && pcd <= 0) {
      document.getElementById('quantEsc').innerHTML = meia
    } else if (inteira <= 0 && meia <= 0 && pcd > 0) {
      document.getElementById('quantEsc').innerHTML = pcd
    }

    if (inteira > 0 && meia > 0 && pcd <= 0) {
      document.getElementById('segundaLinha').innerHTML = maisLinhas

      document.getElementById('tourEsc').innerHTML = tour
      document.getElementById('ingressoEsc').innerHTML = 'Entrada inteira'
      document.getElementById('dataEsc').innerHTML = novoCalendario
      document.getElementById('precoEsc').innerHTML = 'R$ 12,00'
      document.getElementById('quantEsc').innerHTML = inteira

      document.getElementById('tour2Esc').innerHTML = tour
      document.getElementById('ingresso2Esc').innerHTML = 'Meia entrada'
      document.getElementById('data2Esc').innerHTML = novoCalendario
      document.getElementById('preco2Esc').innerHTML = 'R$ 6,00'
      document.getElementById('quant2Esc').innerHTML = meia
    } else if (inteira > 0 && meia <= 0 && pcd > 0) {
      document.getElementById('segundaLinha').innerHTML = maisLinhas

      document.getElementById('tourEsc').innerHTML = tour
      document.getElementById('ingressoEsc').innerHTML = 'Entrada inteira'
      document.getElementById('dataEsc').innerHTML = novoCalendario
      document.getElementById('precoEsc').innerHTML = 'R$ 12,00'
      document.getElementById('quantEsc').innerHTML = inteira

      document.getElementById('tour2Esc').innerHTML = tour
      document.getElementById('ingresso2Esc').innerHTML = 'Entrada PCD'
      document.getElementById('data2Esc').innerHTML = novoCalendario
      document.getElementById('preco2Esc').innerHTML = 'R$ 6,00'
      document.getElementById('quant2Esc').innerHTML = pcd
    } else if (inteira <= 0 && meia > 0 && pcd > 0) {
      document.getElementById('segundaLinha').innerHTML = maisLinhas

      document.getElementById('tourEsc').innerHTML = tour
      document.getElementById('ingressoEsc').innerHTML = 'Meia entrada'
      document.getElementById('dataEsc').innerHTML = novoCalendario
      document.getElementById('precoEsc').innerHTML = 'R$ 6,00'
      document.getElementById('quantEsc').innerHTML = meia

      document.getElementById('tour2Esc').innerHTML = tour
      document.getElementById('ingresso2Esc').innerHTML = 'Entrada PCD'
      document.getElementById('data2Esc').innerHTML = novoCalendario
      document.getElementById('preco2Esc').innerHTML = 'R$ 6,00'
      document.getElementById('quant2Esc').innerHTML = pcd
    }

    if (inteira > 0 && meia > 0 && pcd > 0) {
      document.getElementById('segundaLinha').innerHTML = maisLinhas
      document.getElementById('terceiraLinha').innerHTML = mais3Linhas

      document.getElementById('tourEsc').innerHTML = tour
      document.getElementById('ingressoEsc').innerHTML = 'Entrada inteira'
      document.getElementById('dataEsc').innerHTML = novoCalendario
      document.getElementById('precoEsc').innerHTML = 'R$ 12,00'
      document.getElementById('quantEsc').innerHTML = inteira

      document.getElementById('tour2Esc').innerHTML = tour
      document.getElementById('ingresso2Esc').innerHTML = 'Meia entrada'
      document.getElementById('data2Esc').innerHTML = novoCalendario
      document.getElementById('preco2Esc').innerHTML = 'R$ 6,00'
      document.getElementById('quant2Esc').innerHTML = meia

      document.getElementById('tour3Esc').innerHTML = tour
      document.getElementById('ingresso3Esc').innerHTML = 'Entrada PCD'
      document.getElementById('data3Esc').innerHTML = novoCalendario
      document.getElementById('preco3Esc').innerHTML = 'R$ 6,00'
      document.getElementById('quant3Esc').innerHTML = pcd
    }
  }
}
</script>