<template>
   <div class="form-container">
    <div class="form-wrapper">
      <h1>Cadastro de Usuário</h1>
    <form action="" @submit="preventDefault">
        
        <input type="text" 
            name='userName'
            autocomplete='off'
            placeholder='Nome de usuário'
         v-model="form.userName"/>  
        
         <input type="password" 
            name='senha'
            autocomplete='off'
            placeholder='Senha'
            class="password" v-model="form.password" /> 

            <input type="password" 
            name='senha'
            autocomplete='off'
            placeholder='Confirme a senha'
            class="password" v-model="form.confirmPassword" /> 

        <button @click="saveUser" class="btn btn-primary">Cadastrar</button>
    </form>
   
    </div>
   </div>
</template>

<script>
    export default {
        props:{
            baseURL:String
        },
        data(){
            return{
                form:{
                    userName:"",
                    password:"",
                    confirmPassword:""
                }
            }
        },
        methods:{
            async saveUser(e){
                e.preventDefault();
                if(this.form.userName === '' || this.form.password === '' || this.form.confirmPassword === ''){
                    this.$emit('alertInputs');
                    this.$emit('showMessage', 'Preencha todos os campos');
                    return;
                }else if(this.form.password != this.form.confirmPassword){
                    this.$emit('showMessage', "Senhas diferentes");
                    return;
                }

                const req = await fetch(this.baseURL + "/api/users", {
                    method:'post',
                    
                    body:JSON.stringify({login:this.form.userName, password:this.form.password, admin:true}),
                    headers:{
                        "Content-Type": "application/json",
                    }
                });

                if(req.status === 400){
                    this.$emit('showMessage', 'Nome de usuário já cadastrado')
                }else{
                    this.$emit('showMessage', `${this.form.userName} cadastrado!`)
                } 


            }
        }
    }
</script>

<style scoped>
    .form-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ccc;
  }
  

  .form-wrapper{
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