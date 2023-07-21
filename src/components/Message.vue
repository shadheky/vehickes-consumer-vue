<template>
    <div v-show="!hide">
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
            return {
                hide:false
            }
        }
    }

</script>

<style scoped>
    div{
        background-color: #cccccc;
        padding: 10px 20px;
        width: 300px;
        border-radius: 3px;
        position: absolute;
        top: 4px;
        right: 2%;
        display: flex;
        flex-wrap: wrap;
    }

    .content{
        width: 85%;
        
    }   
    .close{
        color: red;
        cursor: pointer;
        padding: 0px 8px;
        box-sizing: border-box;
        border-radius: 2px;
    }

    .close:hover{
        background-color: #aaa;
    }

</style>