<template>
   <div class="alert-container">
        <div id="alert-wrapper">
            <h1>Antes um pequeno aviso...</h1>
            <p>
                Esse app consome uma serviço fictício de carros que possui um sistema de verificação e validação de usuários para determinadas ações, se é do seu interesse testar essa verificação faça o seu cadastro no botão abaixo, se não apenas clique em continuar como um visitante.
            </p>

            <router-link to="/usuario/cadastro" type="button" class="btn btn-primary" >Cadastrar</router-link>
         <router-link to="/consulta" @click="$emit('authenticate', 'Luiz Alberto', '123')" type="button" class="btn btn-secondary" >Continuar como visitante</router-link>
            
         <p class="login-info">
            Se já possui cadastro faça <router-link class="login" to="/usuario/login">Login</router-link>
         </p>
        </div>
   </div>
</template>

<script>
export default {
    props:{
        baseURL:String,
        AuthorizationBearer:String
    }
}
</script>


<style scoped>
    .alert-container{
       background-color: #ccc;
       display: flex;
       justify-content: center;

    }

    #alert-wrapper{
        width: 80%;
        height: 50%;
        margin-top: 40px;
        background-color: #fbfaff;
        padding: 30px;
        font-size: 1.1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        max-width: 600px;
        margin-bottom: 10%;
    }

    h1{
        color: red;
        margin-bottom: 12px;
    }

    p{
        margin-bottom: 30xp;
    }

    .btn{
        width: 100%;
        margin-top: 20px;
    }

    .login-info{
        margin-top: 30px;
    }

    .login{
    color: #5599cc;
    }
    

    @media (max-width:700px) {
        *{
            text-align: center;
        }
    }

</style>