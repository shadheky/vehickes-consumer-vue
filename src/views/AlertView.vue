<template>
   <div class="alert-container">
        <div id="alert-wrapper">
            <h1>Antes um pequeno aviso...</h1>
            <p>
                Esse app consome uma serviço fictício de carros que possui um sistema de verificação e validação de usuários para determinadas ações, se é do seu interesse testar essa verificação faça o seu cadastro no botão abaixo, se não apenas clique em continuar como um visitante.
            </p>

            <button type="button" class="btn btn btn-primary" >Cadastrar</button>
        <button type="button" class="btn btn btn-secondary" >Continuar como visitante</button>
     
        </div>
   </div>
</template>

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
    }

    h1{
        color: red;
        margin-bottom: 12px;
    }

    p{
        margin-bottom: 30xp;
    }

    button{
        width: 100%;
        margin-top: 20px;
    }

</style>