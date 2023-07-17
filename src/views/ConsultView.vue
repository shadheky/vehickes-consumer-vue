<template>
  <div class="query-container">
    <form action="" id="query-form">
        <h1>Consulte o seu veiculo</h1>
        <label for="plateValue">Número da placa</label>
        <InputText :inputFetures="{name:'plateValue', autocomplete:'off', placeholder:'QEZ2738'}"/>

        <label for="plateValue">Renavam</label>
        <InputText :inputFetures="{name:'renavam', autocomplete:'off', placeholder:'481014772'}"/>
        <button type="button" class="btn btn-success form-button" >Pesquisar</button>
        <button type="button" class="btn btn-danger form-button" >Cancelar</button>
      </form>
  </div>
</template>

<script>
import InputText from '@/components/form/InputText.vue'


  export default {
    
    name: "ConsultView",
    data(){
      return{

      }
    },
    components:{
      InputText
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



</style>