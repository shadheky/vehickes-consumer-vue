<template>
     <input type="text" :name="inputFetures.name" :autocomplete="inputFetures.autocomplete" :placeholder="inputFetures.placeholder">
</template>

<script>
    export default{
        name:"InputText",
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

</style>