<template>
  <div class="query-container">
    <form action="" id="query-form" v-show="queryContentIsHide">
        <h1>Consulte o seu veículo</h1>
        <label for="plateValue">Número da placa</label>
        <input type="text" id='plateValue' autocomplete='off' placeholder='QEZ2738' v-model="form.plateValue"/>

        <label for="renavam">Renavam</label>
        <input type="text" id='renavam' autocomplete='off' placeholder='481014772' v-model="form.renavam"/>
        <button @click="findVehicle()" type="button" class="btn btn-success form-button" >Pesquisar</button>
        <router-link to="/consulta/cpf">Pesquisar por CPF</router-link>
    </form>

    <div id="query-content" v-show="!queryContentIsHide">

        <i @click="returnToConsult" class="fa-solid fa-arrow-left"></i>
    
      <div>Informações do veículo</div>
          <div id="vehicle-info">
            <span>
            Data de compra: {{vehicleData.purchaseDate}}
          </span>
          <span>
              Renavam: {{vehicleData.renavam}}
          </span>
          <span>
              Cor: {{vehicleData.color}}
          </span>
          <span>
              Local de origem: {{vehicleData.plateLocation}}
          </span>
          <span>Tipo da placa: {{plateService[vehicleData.service]}}</span>
          <span>
              Numero da placa: {{vehicleData.plateValue}}
          </span>

          <span class="full-width">
              Numero da anterior da placa: {{vehicleData.previousPlateValue}}
          </span>

      </div>
       <div>Informações do propietário</div>
       <div id="owner-info">
          <span>Nome: {{vehicleData.ownerName}}</span>
          <span>Cpf: {{vehicleData.ownerCpf}}</span>
       </div>
       <div>Informações do modelo</div>
       <div id="owner-info">
          <span>Marca:{{modelData.brand}}</span>
          <span>Nome do modelo: {{modelData.modelName}} </span>
          <span>Ano de fabricação: {{modelData.fabricationYear}}</span>
          <span>Ano do modelo: {{modelData.modelYear}}</span>
          <span class="full-width">Qunatidade de passageiros: {{modelData.passengers}}</span>
       </div>

       <div>Multas</div>
       <table id="tickets-info">
            <tr>
              <th>Data</th>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Estado</th>
            </tr>
            <tr v-for="(ticket, index) in vehicleData.tickets" :key="index">
              <td>{{ticket.postingDate}}</td>
              <td>{{ticket.description}}</td>
              <td>{{ticketType[ticket.type]}}</td>
              <td>{{ticketPaymentStatus[ticket.status]}}</td>
            </tr>
           
       </table>

       <p @click="updatePlateToMercosulPlate(vehicleData.plateValue)" v-show="vehicleData.service === 'BrazilPlateService'" id="changePlate">Clique aqui para atualizar a placa</p>
       
    </div>


  </div>
</template>

<script>
 
  export default {
    
    name: "ConsultView",
    data(){
      return{
        form:{
          plateValue:"",
          renavam:""
        },
        message:"",
        vehicleData:{


        },
        modelData:{

        },
        ticketPaymentStatus:{
          "PENDANT":"Pendente",
          "GENERATED_PAYMENT":"Pagamento Gerado",
          "PAID":"Pago"
        },
        ticketType:{
          "LOWER":"Leve",
          "MEAN":"Médio",
          "SERIUS":"Séria",
          "VERY_SERIUS":"Muito Séria"
        },
        plateService:{
          "BrazilPlateService":"Brasil",
          "MercosulPlateService":"Mercosul"
        }
        ,
        queryContentIsHide:true
      }
    },
    props:{
      baseURL:String,
      bearerToken:String
    },
    methods:{
      async findVehicle(){

        if(this.form.plateValue === "" || this.form.renavam === ""){
          this.$emit('alertInputs');
          this.$emit('showMessage', 'Preencha os campos')
          return;
        }

        const req = await fetch(`${this.baseURL}/api/vehicles/${this.form.plateValue}/${this.form.renavam}`);

          try{
            this.HttpRequestErrors(req.status);
          }catch(error){
            this.$emit('showMessage', error);
            return;
          }

          this.vehicleData = await req.json()
          this.findModel(this.vehicleData.modelId);
          this.showQueryContent();
      },

      HttpRequestErrors(status = 200){
          const errors = {
            400: () => { throw "Informações incorretas" },
            404: () => { throw "Veículo não encontrado" },
            403: () => { throw "Realize Login" },
            500: () => { throw "Realize Login" },
            200: () => {}
          }

          errors[status]();

        },

      async findModel(modelId){
        const req = await fetch(`${this.baseURL}/api/models/${modelId}`);
        this.modelData = await req.json();

      },
      showQueryContent(){
        this.queryContentIsHide = false;
      },
      returnToConsult(){
        this.queryContentIsHide = true;
        this.modelData = {};
        this.$emit('clearForm', this.form);
      },

      async updatePlateToMercosulPlate(plateValue){
        const req = await fetch(`${this.baseURL}/api/vehicles`, {
          method:"PATCH",
          body:JSON.stringify({plateValue}),
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.bearerToken
          }
        });

        try{
          this.HttpRequestErrors(req.status);
        }catch(error){
          this.$emit('showMessage', error);
          return;
        }

        this.vehicleData = await req.json();
      }

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
    padding: 30px;
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

  td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

  tr{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    
  }

  #changePlate{
    cursor: pointer;
  }

</style>