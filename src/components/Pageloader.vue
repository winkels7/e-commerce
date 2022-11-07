<template>
  
  <div class="uk-flex uk-flex-center uk-position-fixed uk-container-expand uk-background-primary uk-width-1-1 uk-height-1-1 uk-position-z-index" v-if="isLoading">
    <div class="uk-margin-auto-vertical">
    <span uk-spinner="ratio: 4.5" class="uk-text-muted"></span>
  </div>
 </div>
</template>

<script>

export default {

  data: () =>{
    return{
      isLoading:true,
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);

  }

}

</script>

<style scoped>


</style>