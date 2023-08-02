<template>
    <div  class="query-container">
      <form  @submit="showTable($event)" action="" id="query-form" v-show="!tableIsShowed">
          <h1>Consulte os seus veículos </h1>
          <label for="cpf">Cpf</label>
          <input type="text" id='cpf' autocomplete='off' placeholder='936.687.740-05' v-model="form.cpf"/>
  
          <button @click="showTable($event)" type="button" class="btn btn-success form-button" >Pesquisar</button>
          <router-link to="/consulta">Voltar</router-link>
      </form>
      
      <div id="query-content" v-show="tableIsShowed">
        <i @click=" hideTable()" class="fa-solid fa-x"></i>
        <h1>Veículos de {{ownerName}}</h1>
        <p>Clique para mais informações</p>
            <table >
                <tr id="t-head">
                    <th>Placa</th>
                    <th>Renavam</th>
                    <th>Ano de compra</th>
                </tr>

                <tr @click="loadVehiclePopUp(vehicle.modelId, vehicle)" v-for="vehicle in vehiclesData" :key="vehicle.id">
                    <td> {{vehicle.plateValue}} </td>
                    <td> {{vehicle.renavam}} </td>
                    <td> {{vehicle.purchaseDate}} </td>
                </tr>
            </table>
      </div>

      <div @click="hidePopup($event)" class="vehicle-popup-container" v-show="popupIsShowed">
                <div id="vehicle-popup-wrapper">
                    <div>Modelo: {{modelDataPopUp.modelName }}</div>
                    <div>Marca: {{modelDataPopUp.brand }}</div>
                    <div>Ano-Modelo: {{modelDataPopUp.modelYear }}</div>
                    <div>Placa: {{  vehicleDataPopup.plateValue }}</div>
                    <div>Renavam: {{vehicleDataPopup.renavam }}</div>
                    <button  class="btn btn-danger">
                        Voltar
                    </button>   
                </div>
                
      </div>
  
    </div>
  </template>
  
  <script>
   
    export default {
      name: "ConsultView",
      data(){
        return{
          form:{
            cpf:""
          },
          message:"",
          vehiclesData: [],
          modelDataPopUp:{},
          vehicleDataPopup:{},
          ownerName:"",
          popupIsShowed:false,
          tableIsShowed:false
        }
      },
      props:{
        baseURL:String
      },
      methods:{

        async showTable(e){
            e.preventDefault();

            if(this.form.cpf === ""){
                this.messageEmptyInput();
                return;
            }

            try{
                await this.findVehiclesAndOwnerName();
            }catch(error){
                this.$emit('showMessage', error)
                return;
            }
            
            this.tableIsShowed = true;

        },

        messageEmptyInput(){
            this.$emit('alertInputs');
            this.$emit('showMessage', 'Preencha os campos')
         },

        async findVehiclesAndOwnerName(){
          const req = await fetch(`${this.baseURL}/api/vehicles/owner/${this.form.cpf}`);
          const vehiclesFound = await req.json();
         
          try{
            this.HttpRequestErrors(req.status)
          }catch(error){
            throw error
          }
          
          this.vehiclesData = vehiclesFound;
          this.ownerName = vehiclesFound[0].ownerName.split(' ')[0] + " " + vehiclesFound[0].ownerName.split(' ')[1]
        },

        HttpRequestErrors(status = 200){
        if(status === 400){
            throw "Informações incorretas"
          }else if(status === 404){
            throw "Proprietário não encontrado"
          }
        },

        hideTable(){
            this.tableIsShowed = false;
            this.$emit('clearForm', this.form)
        },

        loadVehiclePopUp(modelId, vehicle){
            this.popupIsShowed = true;
            this.loadModel(modelId);
            this.vehicleDataPopup = vehicle;
        },
  
        async loadModel(modelId){
            const req = await fetch(this.baseURL + "/api/models/" + modelId);
            
            this.modelDataPopUp = await req.json();
        },

        hidePopup(e){
                if(e.target.classList.contains('vehicle-popup-container') || e.target.tagName === 'BUTTON'){
                    this.popupIsShowed = false;
                }                
            },
        
        returnToConsult(){
          this.queryContentIsHide = true;
          this.modelData = {};
          this.$emit('clearForm', this.form);
        },
        
       }
  }
  </script>
  


  <style scoped>
    .query-container{
   
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
  
    #query-form{
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
      margin-top: 5%;
    }
  
    label{
      align-self: flex-start;
      margin: 20px 0px 10px 10%;
      font-size: 1.1em;
      color: #3b68a8;
    }
  
    .form-button{
      width: 80%;
      margin-top: 20px;
    }
  
  
    #query-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      background-color: #fbfaff;
      padding: 30px 4px;
      max-width: 600px;
      border: 1px solid #ccc;
      border-radius: 20px;
      margin-top: 5%;
      position: relative;
    }
  
    #query-content div{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 1.5em;
      margin-top: 10px;
    }
    
    h1{
        text-align: center;
    }

     span{
      width: 45%;
      background-color: #f9f6fa;
      border-radius: 4px;
      margin-top: 7px;
      font-size: 15px;
      padding: 4px 10px;
    }
  
     
    #query-content div span:hover{
      background-color: #cfcfcf;
    }
  
    #query-content i{
      position: absolute;
      left: 20px;
      top: 13px;
      cursor: pointer;
    }
  
    #tickets-info{
      width: 100%;
      table-layout: fixed;
      font-size: .7em;
    }
  
    .full-width{
      width: 100%;
    }
    table{
    width: 70%;
    table-layout: fixed;
    font-size: .8em;
    margin: auto;
    margin-top: 20px;
    max-width: 800px;
    border: 1px solid #000000;
  
    border-radius: 5px;
    overflow: hidden;
  }

 


  td, th{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 12px 12px;
    cursor: pointer;
    }
 
    table tr:nth-child(odd){
        background-color: #ccc;
    }

    #t-head{
        background-color: #36304a;
        color: rgb(255, 255, 255);
    }

    .vehicle-popup-container{
        width: 100%;
        background-color: #cccccc52;
        height: 100%;
        position: fixed;
        top: 0;
        padding: 10%;
        display: flex;
        justify-content: center;
    }

    #vehicle-popup-wrapper{
        width: 80%;
        background-color: white;
        height: max-content;
        padding: 20px;
        border-radius: 4px;
        max-width: 400px;
    }

    #vehicle-popup-wrapper div{
        background-color: #cccccc91;
        margin-top: 20px;
        height: 10%;
        padding: 5px;
        border-radius: 2px;
    }

    #vehicle-popup-wrapper .btn{
        width: 100%;
        margin-top: 20px;
    }
    
  </style>