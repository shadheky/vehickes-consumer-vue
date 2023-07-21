<template>
  <div class="query-container">
    <Message :message="message" v-show="message"/>
    <form action="" id="query-form" v-show="queryContentIsHide">
        <h1>Consulte o seu veículo</h1>
        <label for="plateValue">Número da placa</label>
        <InputText  :inputFetures="{name:'plateValue', autocomplete:'off', placeholder:'QEZ2738'}" v-model="form.plateValue"/>

        <label for="plateValue">Renavam</label>
        <InputText :inputFetures="{name:'renavam', autocomplete:'off', placeholder:'481014772'}" v-model="form.renavam"/>
        <button @click="findVehicle()" type="button" class="btn btn-success form-button" >Pesquisar</button>
   
    </form>

    <div id="query-content" v-show="!queryContentIsHide">

        <i @click="reload()" class="fa-solid fa-arrow-left"></i>
    
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
          <span>
              Numero da placa: {{vehicleData.plateValue}}
          </span>

          <span>
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
          <span>Qunatidade de passageiros: {{modelData.passengers}}</span>
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
    </div>


  </div>
</template>

<script>
 
  // purchaseDate": "2023-07-17",
  //       "renavam": "11111111111",
  //       "color": "Azul",
  //       "modelId": 1,
  //       "plateLocation": "Belem-PA",
  //       "service": "BrazilPlateService",
  //       "previousPlateValue": "",
  //       "plateValue": "LDG9996",
  //       "ownerName": "Luiz Alberto",
  //       "ownerCpf": "01409489299",
  //       "tickets": [
  //           {
  //               "postingDate": "17/07/2023",
  //               "description": "Multa de velocidade alta",
  //               "type": "SERIUS",
  //               "status": "PENDANT"
  //           }
  //       ]
  //   }


  import InputText from '@/components/form/InputText.vue';
  import  Message from '@/components/Message.vue';

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
        queryContentIsHide:true
      }
    },
    components:{
      InputText,
      Message
    },
    props:{
      baseURL:String
    },
    methods:{
      async findVehicle(){

        if(this.form.plateValue === "" || this.form.renavam === ""){
          this.alertInputs();
          return;
        }

        const req = await fetch(`${this.baseURL}/api/vehicles/${this.form.plateValue}/${this.form.renavam}`);
        
        if(req.status === 404){
          this.showMessgeAndHide("Veiculo não encontrado");
        }else if(req.status === 200){
          this.vehicleData = await req.json()
          this.findModel(this.vehicleData.modelId);
          this.showQueryContent();
        
        }else{
          this.showMessgeAndHide("Houve um erro ao carregar as informações");
        }

      },
      async findModel(modelId){
        const req = await fetch(`${this.baseURL}/api/models/${modelId}`);
        
        this.modelData = await req.json();

      },
      showMessgeAndHide(text){
        this.message = text;
        setTimeout( () => this.message = "", 3000)
      },
      alertInputs(){
        document.querySelectorAll('input').forEach(input => {
          if( input.value === '' ){
              input.style.borderBottom = "1px solid red"
              this.showMessgeAndHide("Preencha os campos");
          }else{
            input.style.borderBottom = "1px solid rgba(0, 0, 0, 0.597)"
          }
        })
      },
      showQueryContent(){
        this.queryContentIsHide = false;
      },
      reload(){
        this.$router.go();
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
  
  #query-content div span{
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

  td {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

  tr{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    
  }

</style>