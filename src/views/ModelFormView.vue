<template>
    <div class="form-container">
        <h1>Cadastro de modelo</h1>
        <form action="">
        <label for="plateValue">Marca do modelo</label>
        <input type="text" 
            name='marca'
            autocomplete='off'
            placeholder='Chevrolet'
         v-model="modelForm.brand"/>  
         <label for="plateValue">Nome do modelo</label>
         <input type="text" 
            name='nome'
            autocomplete='off'
            placeholder='Onix'
         v-model="modelForm.modelName"/>  
         <label for="plateValue">Ano de fabricação</label> 
           <input type="number"
            name='fabriAno'
            autocomplete='off'
            placeholder='2020'
         v-model="modelForm.fabricationYear"/> 
            <label for="plateValue">Ano do modelo</label> 
           <input type="number" 
            name='modelAno'
            autocomplete='off'
            placeholder='2021'
        v-model="modelForm.modelYear"/>  
         <label for="plateValue">Quantidade de passageiros</label> 
        <input type="number"
            name='passengers'
            autocomplete='off'
            placeholder='5'
        v-model="modelForm.passengers"/>  

        <button @click="persitModel" type="button" class="btn btn-success">Cadastrar</button>
        <router-link to="/" class="btn btn-danger">Cancelar</router-link>
    </form>
    </div>
</template>

<script>
 

    export default{
        
        data(){
           return{ 
                 modelForm:{
                    brand:"",
                    modelName:"",
                    fabricationYear:"",
                    modelYear:"",
                    passengers:null

                 },
                message:""
            }
        },
        props:{
            baseURL:String,
            bearerToken:String
        },
        methods:{
            async persitModel(){
                if(this.bearerToken === ''){
                    this.$emit('showMessage', 'Realize o login');
                    return
                }
                const req = await fetch(this.baseURL + "/api/models", {
                    method:'post',
                    body: JSON.stringify(this.modelForm),
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.bearerToken}`
                    }
                });

                if(req.status === 403){
                    this.$emit('showMessage', 'Usuário não autorizado');
                }else if(req.status === 400){
                    this.$emit('showMessage', 'Preencha os campos corretamente');   
                }else{
                    this.$emit('showMessage', 'Modelo cadatrado')
                    this.$emit('clearForm', this.modelForm)
                }

            }
           
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