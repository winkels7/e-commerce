<template>
  <div
    class="uk-container-large uk-background-secondary uk-flex uk-flex-around"
  >
    <div
      class="uk-container uk-container-medium uk-background-muted uk-width-1-2 uk-margin-large-top uk-border-rounded uk-overflow-auto"
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
                  src="../assets/Icone-ticket-Png-removebg-preview (1).png"
                  width="40"
                  height="40"
                  alt=""
                />
              </td>
              <td class="uk-table-link">
                <a class="uk-link-reset" href="">
                  <strong id="tourEsc">Histórico</strong><br />
                  <span id="ingressoEsc">Meia-Entrada</span></a
                >
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
      class="uk-container uk-container-medium uk-background-muted uk-width-1-4 uk-margin-large-top uk-border-rounded"
      data-aos="fade-left"
      data-aos-duration="1000"

      >
      <h3 class="uk-margin-small-top">Pedido</h3>
      <hr class="uk-divider-small" />
      <div class="uk-flex uk-flex-between">
        <div>
          <h4><strong>Total</strong></h4>
        </div>

        <div>
          <p>R$ 0,00</p>
        </div>
      </div>

      <div class="uk-flex uk-flex-between">
        <div>
          <h4><em>Subtotal (1 item)</em></h4>
        </div>

        <div>
          <p class="uk-text-top">R$ 0,00</p>
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
  <div class="uk-container uk-container-small uk-background-secondary"></div>
</template>

<script>
import obj from '../IndexedDB'
export default {
  methods: {
    IndexedDB() {
      return obj.IndexedDB()
    },
  },
}
</script>