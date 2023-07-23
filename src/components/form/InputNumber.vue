<template>
    <input type="number" :name="inputFetures.name" :autocomplete="inputFetures.autocomplete" :placeholder="inputFetures.placeholder" v-model="v">
</template>

<script>
   export default{
       name:"InputNumber",
       props:{
           inputFetures:{
               name:"",
               autocomplete:"off",
               placeholder:""
           }
       }
   }

</script>

<style scoped>
   input{
   width: 80%;
   height: 45px;
   border: 0 none;
   border-bottom: 2px solid #cccccc60;
   border-radius: 2px;
   margin-top: 0px;
   padding: 4px;
   font-size: 1.2rem;
   
 }

 input:focus{
   box-shadow: 0 0 0 0;
   outline: 0;
   border-bottom: 2px solid rgba(0, 0, 0, 0.597);
 }

 input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}

</style>