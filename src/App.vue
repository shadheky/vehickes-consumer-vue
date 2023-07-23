<template>
  <Header></Header>
  <Message :message="message" v-show="message"/>
  <router-view id="main-view" :baseURL="baseURL" @authenticate="authenticate"/>
</template>

<script>
  import Header from './components/Header.vue';
  import Message from './components/Message.vue';

  export default{
    components:{
      Header,
      Message
    },
    methods:{

    },
    data(){
      return{
        baseURL:"http://localhost:8080",
        bearerToken:"",
        message:""

      }
    },
    methods:{
      async authenticate(login, password){
        const req = await fetch(this.baseURL + `/api/users/auth`, {
          method:"POST",
          body:JSON.stringify({
          login,
          password
          }),
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
           
          }
        });

        console.log({login, password});

        if(req.status === 404 || req.status ===  403){
          this.showMessgeAndHide('Credenciais inválidas');
        }else{
          this.bearerToken = await req.json().token;
          this.showMessgeAndHide('Logado com sucesso')
        }

     


      },
      showMessgeAndHide(text){
        this.message = text;
        setTimeout( () => this.message = "", 3000)
      },
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
