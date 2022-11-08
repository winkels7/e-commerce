<script setup></script>

<template>
  <div class="uk-background-image@xl uk-background-cover uk-container-expand uk-height-large">
    <div class="uk-flex uk-flex-around">
      <div class="uk-margin-auto-vertical" 
      data-aos="fade-right"
      data-aos-duration="1000"
      >
        <h1 class="uk-text-muted">Parque das Palmeiras</h1>
        <hr class="uk-divider-small" />
        <p class="uk-text-muted">
          Venha conhecer nosso parque! <br />
          Com diversas atrações e diversão garantida para toda a familia.
        </p>
      </div>
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-1-3 uk-margin-large-top"
        tabindex="-1"
        uk-slideshow="autoplay: true min-height: 300; max-height: 700; width: 300; animation: push"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <ul class="uk-slideshow-items" >
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
    class="uk-container-expand uk-height-viewport uk-background-secondary uk-flex uk-flex-center uk-box-shadow-medium uk-padding-large"
  >
    <div
      class="uk-container-xlarge uk-background-muted uk-width-3-4 uk-height-large uk-margin-large-top uk-border-rounded uk-box-shadow-large uk-flex"
    
      >
      <form class="uk-margin-large-left uk-margin-medium-top">
        <h1 data-aos="fade-right"
            data-aos-duration="1000">Compre seu Ingresso</h1>
        <hr class="uk-divider-small" />

        <div class="uk-margin uk-margin-medium-top" 
        data-aos="fade-down"
            data-aos-duration="1000">
          <div class="uk-inline">
            <label class="uk-form-label">Data da Reserva</label>
            <div class="uk-form-controls">
              <input
                v-model="calendario"
                class="uk-input uk-form-width-medium"
                type="date"
                aria-label="Not clickable icon"
              />
            </div>
          </div>
        </div>

        <!-- tipo do tour -->
        <div class="uk-margin" data-aos="fade-down"
            data-aos-duration="1000">
          <label class="uk-form-label" for="form-stacked-select">Tour</label>
          <div class="uk-form-controls">
            <select
              class="uk-select uk-form-width-medium"
              id="form-stacked-select"
              v-model="tour"
            >
              <option>Histórico</option>
              <option>Amanhecer</option>
              <option>Educacional</option>
            </select>
          </div>
        </div>

        <div class="uk-flex uk-flex-column">
          <a
            onclick="UIkit.notification({message:'<span uk-icon=\'icon: check\'></span> Produto adicionado no carrinho!'})"
            @click="everything()"
            class="uk-button uk-button-secondary uk-margin-small-bottom uk-margin-small-top uk-border-rounded"
            data-aos="fade-right"
        data-aos-duration="1000"
          >
            Adicionar no Carrinho
          </a>

          <a
            class="uk-button uk-button-secondary uk-button-small uk-border-rounded"
            type="button"
            uk-toggle="target: #offcanvas-push"
            data-aos="fade-right"
        data-aos-duration="1000"
            >+ Informações</a
          >

          <div id="offcanvas-push" uk-offcanvas="mode: reveal; overlay: true" >
            <div class="uk-offcanvas-bar">
              <button
                class="uk-offcanvas-close"
                type="button"
                uk-close
              ></button>

              <h3>LEI DA MEIA ENTRADA</h3>

              <p>
                A meia entrada é regulamentada pela Lei nº 12.933/2013, que
                dispõe sobre o acesso a eventos culturais, esportivos e de
                entretenimento.
              </p>

              <p>
                De acordo com a lei, são considerados beneficiários da meia
                entrada:
              </p>

              <p>
                – Estudantes: com comprovante de matrícula e identidade
                estudantil;
              </p>

              <p>– Professores: com comprovante de identificação funcional;</p>

              <p>
                – Pessoas com deficiência: com comprovante de identidade
                funcional ou cartão deBeneficiário do INSS;
              </p>

              <p>
                – Jovens de baixa renda: com comprovante de inscrição no
                Cadastro Único para Programas Sociais do Governo Federal
                (CadÚnico) ou no Cadastro Único para Programas Sociais do
                Governo Estadual e do Município (CadÚnico-SE/MG);
              </p>
            </div>
          </div>
        </div>
      </form>
      <!-- tipo do ingresso -->
      <div class="uk-flex uk-flex-column uk-width-1-3 uk-margin-xlarge-left">
        <div>
          <div
            class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body"
            data-aos="fade-right"
            data-aos-duration="1000"
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
              v-model="inteira"
              class="uk-input uk-form-width-xsmall uk-border-pill uk-margin-small-bottom uk-box-shadow-small"
              type="number"
              min="0"
            />
          </div>
        </div>

        <!-- tipo do tour -->
        <div>
          <div
            class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body uk-postion-relative"
            data-aos="fade-right"
            data-aos-duration="1000"
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
              v-model="meia"
              class="uk-input uk-form-width-xsmall uk-border-pill uk-margin-small-bottom uk-box-shadow-small"
              type="number"
              min="0"
            />
          </div>
        </div>

        <div>
          <div
            class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body uk-postion-relative"
            data-aos="fade-right"
            data-aos-duration="1000"
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
              v-model="pcd"
              class="uk-input uk-form-width-xsmall uk-border-pill uk-margin-small-bottom uk-box-shadow-small"
              type="number"
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
        data-aos="fade-up"
        data-aos-duration="1000"
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
        <h1 data-aos="fade-up" data-aos-duration="1000">Produtos</h1>
        <hr class="uk-divider-small" />
        <p class="uk-text-default" data-aos="fade-right">
          Você deseja algumas lembrancinhas? <br />Não se preocupe, temos
          diversos produtos no nosso parque como: camisetas, copos
          personalizados, ecobags e muito mais!! <br />
          Venha nos visitar!!
        </p>
      </div>
    </div>
  </div>

  <div
    class="uk-flex uk-flex-center uk-margin-medium-top uk-margin-large-bottom"
    uk-slider
  >
    <article
      class="uk-comment uk-comment-primary uk-margin-large-top uk-width-1-3 uk-box-shadow-small uk-box-shadow-hover-large"
      role="comment"
      data-aos="fade-right"
      data-aos-duration="1000"
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </article>

    <article
      class="uk-comment uk-comment-primary uk-margin-large-top uk-width-1-3 uk-margin-medium-left uk-box-shadow-small uk-box-shadow-hover-large"
      role="comment"
      data-aos="fade-left"
      data-aos-duration="1000"
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
    </article>
  
  </div>

  <div class="uk-flex uk-flex-center uk-margin-large-bottom uk-margin-large-top">
    <div class="uk-flex uk-flex-column">
    <h1 class="uk-text-center" data-aos="fade-right" data-aos-duration="1000">Como Chegar</h1>
    <hr class="uk-divider-icon uk-text-center" data-aos="fade-left" data-aos-duration="2000">
    <iframe data-aos="fade-down" data-aos-duration="1000" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.025640698292!2d-52.4573542849661!3d-29.69003628201257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951cbb5d74fd5c3d%3A0x205027b242283553!2sImply%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1667835248173!5m2!1spt-BR!2sbr" width="800" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="uk-margin-large-bottom"></iframe>  </div>
  </div>
</template>

<script>
import StorageTable from './controllers/Checkout.controller.mjs'

  export default {
    data() {
      return {
        calendario: '',
        tour: '',
        inteira: '0',
        meia: '0',
        pcd: '0'
      }
    },

  methods: {
    everything() {
      const $storage = new StorageTable()

        // alert(this.inteira)

        $storage.criarTable({
          nome: 'ingressos',
          item: { nome: 'ingresso_chave', chaves: ['chave'], params: { unique: true } }
        })

        $storage.popularTable({
          nome: 'ingressos',
          permissao: 'readwrite',
          action: 'ingressos',
          campos: [
            { info: this.calendario },
            { info: this.tour },
            { info: this.inteira },
            { info: this.meia },
            { info: this.pcd }
          ]
        })
    }
  }
}
</script>