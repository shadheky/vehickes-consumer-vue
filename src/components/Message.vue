<template>
    <div>
        <span class="content">{{message}}</span>
      
    </div>
</template>

<script>
    
    export default{
        name:"Message",
        props:{
            message:String
        },
        data(){
            
        },
      
    }

</script>

<style scoped>
    div{
        background-color: #cccccc;
        padding: 10px 20px;
        width: 300px;
        border-radius: 3px;
        position: fixed;
        top: 4px;
        right: 2%;
        display: flex;
        flex-wrap: wrap;
        z-index: 10;
    }

    .content{
        width: 85%;  
    }   


</style>