<template>
  <div class="login-container">
    <div class="login-wrapper">
      <h1>Login</h1>
    <form action="" @submit="preventDefault">
      
        <InputText :inputFetures="{
            name:'userName',
            autocomplete:'off',
            placeholder:'Nome de usuário'
        }" v-model="userName"/>  
        
         <InputText :inputFetures="{
            name:'senha',
            autocomplete:'off',
            placeholder:'Senha',
            isPassword:true
        }" class="password" v-model="password"/> 

        <button @click="$emit('authenticate', userName, password)" class="btn btn-primary">Logar</button>
    </form>
    <p>Ainda não possui cadastro? <router-link to="/">Cadastrar-se</router-link> </p>
    </div>
  </div>
</template>

<script>
  import InputText from '@/components/form/InputText.vue';

  export default {
    name:"LoginView",
    components:{
      InputText
    },
    data(){
      return{
        userName:"",
        password:""
      }
    },
    emits:['authenticate'],
    methods:{
      preventDefault(event){
        event.preventDefault();
        
        if(this.userName === "" || this.password === ""){
          this.alertInputs();
          return;
        }
      },alertInputs(){
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
</script>

<style scoped>

  .login-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ccc;
  }
  

  .login-wrapper{
    padding: 30px;
    background-color: #fff;
    width: 80%;
    height: 70vh;
    max-width: 400px;
    margin-top: 5%;
    border: 1px solid #ccc;
    border-radius: 10px;
  }

  h1{
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10%;

  }
  input{
    width: 100%;
    
  }

  .password{
    margin-top: 40px;
  }
  .btn{
    margin: 30px 0px;
    width: 100%;
    border-radius: 100px;
    height: 50px;
  }

  p{
    text-align: center;
  }
  
  a{
    color: #5599cc;
  }


</style>
