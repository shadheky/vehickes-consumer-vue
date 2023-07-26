<template>
    <div class="form-container">
        <h1>Cadastro de Veículo</h1>

        <form action="">
            <label for="purchaseDate">Data de compra</label>
        <input type="date" 
            name='purchaseDate'
            autocomplete='off'
            :max="maxDate"
            v-model="vehicleForm.purchaseDate"
         /> 
        
         <label for="color">Cor do Veículo</label>
        <input type="text" 
            name='color'
            autocomplete='off'
            placeholder="Azul"
            v-model="vehicleForm.color"
         /> 

         <label for="modelId">Id do modelo</label>
        <input type="number" 
            name='modelId'
            autocomplete='off'
            placeholder="5"
            v-model="vehicleForm.modelId"
         /> 

         <label for="local">Localização</label>
        <input type="text" 
            name='local'
            autocomplete='off'
            placeholder="belem-pa"
            v-model="vehicleForm.plateLocation"
         /> 

         <label for="service">Serviço de placa</label>
        <select name="service" id="" v-model="vehicleForm.service">
            <option value="">Selecione</option>
            <option value="MercosulPlateService">Placa Mercosul</option>
            <option value="BrazilPlateService">Placa Brazil</option>
        </select>
         
         <label for="ownerName">Nome do proprietário</label>
        <input type="text" 
            name='ownerName'
            autocomplete='off'
            placeholder="Elias Nascimento"
            v-model="vehicleForm.ownerName"
         />

         
         <label for="local">Cpf do proprietário</label>
        <input type="text" 
            name='local'
            autocomplete='off'
            placeholder="069.247.770-58"
            v-model="vehicleForm.ownerCpf"
         />   
         
         <button @click="saveVehicle($event)" class="btn btn-success">Cadastrar</button>
        </form>

    

    </div>
</template>

<script>

    export default{
        props:{
            baseURL:String,
            bearerToken:String
        },  
        data(){
            return{
                vehicleForm:{
                    purchaseDate:"",
                    color:"",
                    modelId:"",
                    plateLocation:"",
                    service:"",
                    ownerName:"",
                    ownerCpf:""
                },
                maxDate: new Date().toISOString().split("T")[0]
            }
        },
        methods:{
            async saveVehicle(e){
                e.preventDefault();
                const req = await fetch(this.baseURL + "/api/vehicles", {
                    method:"post",
                    body:JSON.stringify(this.vehicleForm),
                    headers:{
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${this.bearerToken}`
                    }
                });

                try{
                    const res = await req.json();
                    if(res.message === "This cpf already registered in our data base with other name"){
                        this.$emit('showMessage', "Cpf já cadastrado com outro nome");
                        return;
                    }else if(res.errors[0].error === "Cpf invalid"){
                        this.$emit('showMessage', "Cpf inválido");
                        return;
                    } 
                    console.log(res);
                }catch(error){
                    console.log("This requ");
                }
                

                 if(req.status === 404){
                    this.$emit('showMessage', "Modelo não encontrado. Veja corretamente na aba de modelos");
                }else if(req.status === 400){
                    this.$emit('showMessage', "Preencha as informações corretamente");
                }else if(req.status===403 || req.status === 500){
                    this.$emit('showMessage', "Realize o Login");
                }else{
                    this.$emit('showMessage', 'Veículo cadastrado');
                    this.$emit('clearForm', this.vehicleForm);
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

    select{
        width: 80%;
    }
</style>