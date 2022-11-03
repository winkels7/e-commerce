<script setup></script>

<template>
  <div class="uk-background-image@xl uk-background-cover uk-container-xlarge">
    <div class="uk-flex uk-flex-around">
      <div class="uk-margin-medium-top">
        <h1 class="uk-text-muted">Parque das Palmeiras</h1>
        <hr class="uk-divider-small" />
        <p class="uk-text-muted">
          Venha conhecer nosso parque! <br />
          Com diversas atrações e diversão garantida para toda a familia.
        </p>
      </div>
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-1-3 uk-margin-medium-top"
        tabindex="-1"
        uk-slideshow="autoplay: true min-height: 300; max-height: 700; width: 300; animation: push"
      >
        <ul class="uk-slideshow-items">
          <li>
            <img
              src="../assets/pexels-george-pak-7968305.jpg"
              alt=""
              uk-cover
            />
          </li>
          <li>
            <img
              src="../assets/pexels-max-ravier-3436387.jpg"
              alt=""
              uk-cover
            />
          </li>
          <li>
            <img src="../assets/pexels-riccardo-69903.jpg" alt="" uk-cover />
          </li>
          <li>
            <img
              src="../assets/pexels-te-lensfix-1371360.jpg"
              alt=""
              uk-cover
            />
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        ></a>
      </div>
    </div>
  </div>

  <div
    class="uk-container-large uk-background-secondary uk-flex uk-flex-center uk-box-shadow-medium"
  >
    <div
      class="uk-container-xlarge uk-background-muted uk-width-3-4 uk-height-large uk-margin-large-top uk-border-rounded uk-box-shadow-large uk-flex"
    >
      <form class="uk-margin-large-left uk-margin-medium-top">
        <h1>Compre seu Ingresso</h1>
        <hr class="uk-divider-small" />
        

        <div class="uk-margin uk-margin-medium-top">
          <div class="uk-inline">
            <label class="uk-form-label">Data da Reserva</label>
            <div class="uk-form-controls">
              <input
                class="uk-input uk-form-width-medium"
                type="date"
                aria-label="Not clickable icon"
              />
            </div>
          </div>
        </div>

        <!-- tipo do tour -->
        <div class="uk-margin">
          <label class="uk-form-label" for="form-stacked-select">Tour</label>
          <div class="uk-form-controls">
            <select
              class="uk-select uk-form-width-medium"
              id="form-stacked-select"
            >
              <option>Histórico</option>
              <option>Amanhecer</option>
              <option>Educacional</option>
            </select>
          </div>
        </div>

        <div class="uk-flex uk-flex-column">
        <a
          @click="IndexedDB()"
          class="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-top uk-border-rounded"
        >
          Adicionar no Carrinho
        </a>

        <a class="uk-button uk-button-secondary uk-button-small uk-border-rounded" type="button" uk-toggle="target: #offcanvas-push">+ Informações</a>

        <div id="offcanvas-push" uk-offcanvas="mode: reveal; overlay: true">
    <div class="uk-offcanvas-bar">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

        <h3>LEI DA MEIA ENTRADA</h3>

        <p>A meia entrada é regulamentada pela Lei nº 12.933/2013, que dispõe sobre o acesso a eventos culturais, esportivos e de entretenimento.</p>
        
        <p>De acordo com a lei, são considerados beneficiários da meia entrada:</p>

        <p>– Estudantes: com comprovante de matrícula e identidade estudantil;</p>

        <p>– Professores: com comprovante de identificação funcional;</p>
    
        <p>– Pessoas com deficiência: com comprovante de identidade funcional ou cartão deBeneficiário do INSS;</p>

        <p>– Jovens de baixa renda: com comprovante de inscrição no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) ou no Cadastro Único para Programas Sociais do Governo Estadual e do Município (CadÚnico-SE/MG);</p>
    
    </div>
</div>
    </div>

      </form>
      <!-- tipo do ingresso -->
      <div class="uk-flex uk-flex-column uk-width-1-3 uk-margin-xlarge-left">
        <div>
          <div
            class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body"
          >
            <h4>Inteira</h4>
            <p class="uk-left uk-margin-small-bottom">R$ 12,00</p>
            <div
              class="uk-position-absolute uk-position-medium uk-position-center-right"
            >
              <img
                src="../assets/Icone-ticket-Png-removebg-preview (1).png"
                alt="ticket"
                width="100"
              />
            </div>
            <input
              id="inteira"
              class="uk-input uk-form-width-xsmall uk-border-pill uk-margin-small-bottom uk-box-shadow-small"
              type="number"
              value="0"
              min="0"
            />
          </div>
        </div>

        <!-- tipo do tour -->
        <div>
          <div
            class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body uk-postion-relative"
          >
            <h4>Meia-Entrada</h4>
            <p class="uk-left uk-margin-small-bottom">R$ 6,00</p>
            <div
              class="uk-position-absolute uk-position-medium uk-position-center-right"
            >
              <img
                src="../assets/Icone-ticket-Png-removebg-preview (1).png"
                alt="ticket"
                width="100"
              />
            </div>
            <input
              id="meia"
              class="uk-input uk-form-width-xsmall uk-border-pill uk-margin-small-bottom uk-box-shadow-small"
              type="number"
              value="0"
              min="0"
            />
          </div>
        </div>

        <div>
          <div
            class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body uk-postion-relative"
          >
            <h4>PCDs</h4>
            <p class="uk-left uk-margin-small-bottom">R$ 6,00</p>
            <div
              class="uk-position-absolute uk-position-medium uk-position-center-right"
            >
              <img
                src="../assets/Icone-ticket-Png-removebg-preview (1).png"
                alt="ticket"
                width="100"
              />
            </div>
            <input
              id="pcd"
              class="uk-input uk-form-width-xsmall uk-border-pill uk-margin-small-bottom uk-box-shadow-small"
              type="number"
              value="0"
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="uk-container uk-container-medium uk-margin-large-top uk-position-relative"
  >
    <div class="uk-flex uk-flex-between">
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-1-3"
        tabindex="-1"
        uk-slideshow="autoplay: true min-height: 300; max-height: 700; width: 300; animation: push"
      >
        <ul class="uk-slideshow-items">
          <li>
            <img
              src="../assets/Captura de tela de 2022-11-03 08-55-48.png"
              alt=""
              uk-cover
            />
          </li>
          <li>
            <img
              src="../assets/Captura de tela de 2022-11-03 08-56-05.png"
              alt=""
              uk-cover
            />
          </li>
          <li>
            <img
              src="../assets/Captura de tela de 2022-11-03 08-57-29.png"
              alt=""
              uk-cover
            />
          </li>
          <li>
            <img
              src="../assets/Captura de tela de 2022-11-03 08-58-05.png"
              alt=""
              uk-cover
            />
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        ></a>
      </div>

      <div class="uk-article uk-width-1-2">
        <h1>Produtos</h1>
        <hr class="uk-divider-small">
        <p class="uk-text-default">
          Você deseja algumas lembrancinhas? <br />Não se preocupe, temos
          diversos produtos no nosso parque como: camisetas, copos
          personalizados, ecobags e muito mais!! <br>
          Venha nos visitar!!
        </p>
      </div>
    </div>
  </div>


<div class="uk-flex uk-flex-center uk-margin-medium-top uk-margin-bottom " uk-slider>
  <article
    class="uk-comment uk-comment-primary uk-margin-large-top uk-width-1-3 uk-box-shadow-small uk-box-shadow-hover-large "
    role="comment"
  >
    <header class="uk-comment-header">
      <div class="uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img
            class="uk-comment-avatar uk-border-rounded"
            src="../assets/author2.jpg"
            width="100"
            height="200"
            alt="author"
          />
        </div>
        <div class="uk-width-expand">
          <h4 class="uk-comment-title uk-margin-remove">
            <div class="uk-link-reset" href="#">Marcio Costa</div>
          </h4>
          <ul
            class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"
          >
            <li>12 dias atrás</li>
          </ul>
        </div>
      </div>
    </header>
    <div class="uk-comment-body">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </article>

  <article
    class="uk-comment uk-comment-primary uk-margin-large-top uk-width-1-3 uk-margin-medium-left uk-box-shadow-small uk-box-shadow-hover-large"
    role="comment"
  >
    <header class="uk-comment-header">
      <div class="uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img
            class="uk-comment-avatar uk-border-rounded"
            src="../assets/author3.jpg"
            width="100"
            height="200"
            alt="author"
          />
        </div>
        <div class="uk-width-expand">
          <h4 class="uk-comment-title uk-margin-remove">
            <div class="uk-link-reset" href="#">Alana Souza da Costa</div>
          </h4>
          <ul
            class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"
          >
            <li>20 dias atrás</li>
          </ul>
        </div>
      </div>
    </header>
    <div class="uk-comment-body">
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  </article>
</div>
</template>

<script>
export default {
  methods: {
    IndexedDB() {
      // o importante é o que importa //
      alert(`Entrou na função`)

      // teste de compatibilidade
      const indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB ||
        window.shimIndexedDB

      const request = indexedDB.open('parquePalmeiras', 2)

      var inteiro = 12
      var meio = 6

      request.onerror = (event) => {
        alert(`Erro iniciado`)

        console.error('Um erro ocorreu com IndexedDB')
        console.error(event)

        alert(`Erro encerrado`)
      }

      request.onupgradeneeded = () => {
        alert(`Upgrade iniciado`)

        const db = request.result
        const store = db.createObjectStore('ingressos', {
          autoIncrement: true,
        })
        store.createIndex('ingresso_tipo', ['tipo'], {
          unique: false,
        })
        store.createIndex('ingresso_tour', ['tour'], {
          unique: false,
        })
        store.createIndex('ingresso_preco', ['preco'], {
          unique: false,
        })

        alert(`Upgrade encerrado`)
      }

      request.onsuccess = () => {
        alert(`Sucesso iniciado`)

        var tourType = document.getElementById('form-stacked-select').value
        var ingInteiro = document.getElementById('inteira').value
        var ingMeia = document.getElementById('meia').value
        var ingPCD = document.getElementById('pcd').value

        alert(`inteiro: ${ingInteiro} meia: ${ingMeia} pcd: ${ingPCD}`)

        const db = request.result
        const transaction = db.transaction('ingressos', 'readwrite')

        const store = transaction.objectStore('ingressos')

        // store.put({ tipo: tipo, tour: tour, preco: preco });
        if (ingInteiro > 0) {
          store.put({
            tipo: 'Inteiro',
            tour: tourType,
            preco: inteiro,
            quantidade: ingInteiro,
            pago: false,
          })
        }
        if (ingMeia > 0) {
          store.put({
            tipo: 'Meia',
            tour: tourType,
            preco: meio,
            quantidade: ingMeia,
            pago: false,
          })
        }
        if (ingPCD > 0) {
          store.put({
            tipo: 'PCD',
            tour: tourType,
            preco: meio,
            quantidade: ingPCD,
            pago: false,
          })
        }

        alert(`Sucesso encerrado`)
      }
    },
  },
}
</script>
