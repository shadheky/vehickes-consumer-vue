<template>
    <div class="form-container">
        <h1>Cadastro de modelo</h1>
        <form action="">
        <label for="plateValue">Marca do modelo</label>
        <InputText :inputFetures="{
            name:'marca',
            autocomplete:'off',
            placeholder:'Chevrolet'
        }"/>  
         <label for="plateValue">Nome do modelo</label>
         <InputText :inputFetures="{
            name:'nome',
            autocomplete:'off',
            placeholder:'Onix'
        }"/> 
         <label for="plateValue">Ano de fabricação</label> 
           <InputNumber :inputFetures="{
            name:'fabriAno',
            autocomplete:'off',
            placeholder:'2020'
        }"/> 
            <label for="plateValue">Ano do modelo</label> 
           <InputNumber :inputFetures="{
            name:'modelAno',
            autocomplete:'off',
            placeholder:'2021'
        }"/>  
         <label for="plateValue">Quantidade de passageiros</label> 
        <InputNumber :inputFetures="{
            name:'passengers',
            autocomplete:'off',
            placeholder:'5'
        }"/>  

        <button type="button" class="btn btn-success">Cadastrar</button>
        <router-link to="/" class="btn btn-danger">Cancelar</router-link>
    </form>
    </div>
</template>

<script>
    import InputText from '@/components/form/InputText.vue';
    import InputNumber from '@/components/form/InputNumber.vue';
    export default{
        components:{
            InputText,
            InputNumber
        }
    }

</script>

<style scoped>

    h1{
        margin-top: 10px;
    }

    .form-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80%;
        background-color: #fbfaff;
        padding: 30px;
        max-width: 600px;
        border: 1px solid #ccc;
        border-radius: 20px;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    label{
        align-self: flex-start;
        margin: 20px 0px 10px 10%;
        font-size: 1.1em;
        color: #3b68a8;
    }

    .btn{
        width: 80%;
        margin-top: 20px;
    }

</style>