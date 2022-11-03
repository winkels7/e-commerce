<script setup>
</script>

<template>
    <div class="uk-background-image@xl uk-background-cover uk-container-xlarge ">

    <div class="uk-flex uk-flex-around">
       <div class="uk-margin-medium-top">
        <h1 class="uk-text-muted">Parque das Palmeiras</h1>
        <hr class="uk-divider-small">
        <p class="uk-text-muted">Venha conhecer nosso parque! <br>
Com diversas atrações e diversão garantida para toda a familia.</p>
    </div>
       <div class="uk-position-relative uk-visible-toggle uk-light uk-width-1-3 uk-margin-medium-top" tabindex="-1" uk-slideshow="autoplay: true min-height: 300; max-height: 700; width: 300; animation: push">

    <ul class="uk-slideshow-items">
        <li>
            <img src="../assets/pexels-george-pak-7968305.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="../assets/pexels-isaw-company-1124079.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="../assets/pexels-riccardo-69903.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="../assets/pexels-te-lensfix-1371360.jpg" alt="" uk-cover>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
      
    </div>    
    </div>

    <div class="uk-container-large uk-background-secondary uk-flex uk-flex-center">

        <div class="uk-container-xlarge uk-background-muted uk-width-3-4 uk-height-large uk-margin-large-top uk-border-rounded uk-box-shadow-large uk-flex">
            <form class="uk-margin-large-left uk-margin-medium-top ">
                <h1>Compre seu Ingresso</h1>
                <hr class="uk-divider-small">

                    <div class="uk-margin uk-margin-medium-top">
                        <div class="uk-inline">
                            <label class="uk-form-label">Data da Reserva</label>
                            <div class="uk-form-controls">
                            <input class="uk-input uk-form-width-medium" type="date" aria-label="Not clickable icon">
                            </div>   
                        </div>
                    </div>

                    <!-- tipo do tour -->
                    <div class="uk-margin">
                        <label class="uk-form-label" for="form-stacked-select">Tour</label>
                            <div class="uk-form-controls">
                                <select class="uk-select uk-form-width-medium" id="form-stacked-select">
                                    <option>Histórico</option>
                                    <option>Amanhecer</option>
                                    <option>Educacional</option>
                                </select>
                            </div>
                        
                </div>

                <button class="uk-button uk-button-primary uk-margin-small-bottom uk-margin-medium-top">Comprar</button>

            </form> 
            <!-- tipo do ingresso -->       
            <div class="uk-flex uk-flex-column uk-width-1-3 uk-margin-xlarge-left ">
    <div>
        <div class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body">
            <h4>Inteira</h4>
            <p class="uk-left uk-margin-small-bottom">R$ 12,00</p>
            <div class="uk-position-absolute uk-position-medium uk-position-center-right">
                <img src="../assets/Icone-ticket-Png-removebg-preview (1).png" alt="ticket" width="100">
            </div>
        <input id="inteira" class="uk-input uk-form-width-xsmall uk-border-pill  uk-margin-small-bottom uk-box-shadow-small" type="number" value=0 min="0" >
        </div>
    </div>

    <!-- tipo do tour -->
    <div>
        <div class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body uk-postion-relative">
            <h4 >Meia-Entrada</h4>
            <p class="uk-left uk-margin-small-bottom">R$ 6,00</p>
            <div class="uk-position-absolute uk-position-medium uk-position-center-right">
                <img src="../assets/Icone-ticket-Png-removebg-preview (1).png" alt="ticket" width="100">
            </div>
        <input id="meia" class="uk-input uk-form-width-xsmall uk-border-pill  uk-margin-small-bottom uk-box-shadow-small" type="number" value=0 min="0" >
        </div>
    </div>

    <div>
        <div class="uk-card uk-card-default uk-card-small uk-height-small uk-card-body uk-postion-relative">
            <h4>PCDs</h4>
            <p class="uk-left uk-margin-small-bottom">R$ 6,00</p>
            <div class="uk-position-absolute uk-position-medium uk-position-center-right">
                <img src="../assets/Icone-ticket-Png-removebg-preview (1).png" alt="ticket" width="100">
            </div>
        <input id="pcd" class="uk-input uk-form-width-xsmall uk-border-pill  uk-margin-small-bottom uk-box-shadow-small" type="number" value=0 min="0">
        </div>
    </div>

 
   

    </div>
        </div>

    </div>
</template>
