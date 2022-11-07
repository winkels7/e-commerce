<template>
  
  <div class="uk-flex uk-flex-center uk-position-fixed uk-container-expand uk-background-primary uk-width-1-1 uk-height-1-1 uk-position-z-index" v-if="!isloaded">
    <div class="uk-margin-auto-vertical">
    <span uk-spinner="ratio: 4.5" class="uk-text-muted"></span>
  </div>
 </div>
</template>

<script>

export default {

  data: () =>{
    return{
      isloaded:false,
    }
  },
  mounted(){
   
    document.onreadystatechange = () =>{
      if(document.readyState=='complete'){
        this.isloaded=true
      }
    }
  }

}

</script>

<style scoped>

/* .teste{
  width: 100%;
  height: 100vh;
  background-color: #64732F;
  z-index: 999;
} */

</style>