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
       <div class="uk-position-relative uk-visible-toggle uk-light uk-width-1-3 uk-margin-medium-top" tabindex="-1" uk-slideshow="autoplay: true min-height: 300; max-height: 500; width: 300; animation: push">

    <ul class="uk-slideshow-items">
        <li>
            <img src="../assets/back.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="../assets/back.jpg" alt="" uk-cover>
        </li>
        <li>
            <img src="../assets/back.jpg" alt="" uk-cover>
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

</div>
      
    </div>    
    </div>

    <div class="uk-container-xlarge uk-background-secondary">

    </div>
</template>
