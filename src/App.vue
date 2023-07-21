<template>
  <Header></Header>
  <router-view id="main-view" :baseURL="baseURL"/>
</template>

<script>
  import Header from './components/Header.vue';

  export default{
    components:{
      Header
    },
    data(){
      return{
        baseURL:"http://localhost:8080"

      }
    }
  }

</script>

<style>
      @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

    *{
      margin: 0;
      padding: 0;
      font-family: 'Maven Pro';
      box-sizing: border-box;
    }

    #main-view{
      min-height: 100vh;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
</style>
