<template>
  <Header></Header>
  <Message :message="message" v-show="message"/>
  <router-view id="main-view" @showMessage="showMessgeAndHide" @clearForm="formTools.clearForm" @alertInputs="formTools.alertInputs" @authenticate="authenticate" :baseURL="baseURL" :bearerToken="bearerToken"/>
</template>

<script>
  import Header from './components/Header.vue';
  import Message from './components/Message.vue';

  export default{
    components:{
      Header,
      Message
    },
    data(){
      return{
        baseURL:"https://vehicles-api.onrender.com",
        bearerToken:"",
        message:"",
        formTools:{
          clearForm(formModels){
            if(typeof formModels === 'object'){
              for(let key in formModels){
                formModels[key] = ''
              }
            }
          },
          alertInputs(){
          document.querySelectorAll('input').forEach(input => {
            if( input.value === '' ){
                input.style.borderBottom = "1px solid red"
                
            }else{
              input.style.borderBottom = "1px solid rgba(0, 0, 0, 0.597)"
            }
            })
         }
        }

      }
    },
    mounted(){
      this.loadToken();
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
        if(req.status === 200){
          const res = await req.json();
          this.bearerToken = res.token;
          this.showMessgeAndHide('Logado com sucesso');
          localStorage.setItem('token', this.bearerToken)
          return
        }

        this.showMessgeAndHide('Credenciais inválidas')

      },
      showMessgeAndHide(text){
        this.message = text;
        setTimeout( () => this.message = "", 3000)
      },
      loadToken(){
        this.bearerToken = localStorage.getItem('token')
      }
  }}

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

    input, select{
        width: 80%;
        height: 45px;
        border: 0 none;
        border-bottom: 2px solid #cccccc60;
        border-radius: 2px;
        margin-top: 0px;
        padding: 4px;
        font-size: 1.2rem;
        
  }

  input:focus, select:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.597);
  }

  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}

</style>
