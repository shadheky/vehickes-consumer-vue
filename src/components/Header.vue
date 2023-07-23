<template>
    <header id="menu">
        <span id="logo" @click="closeMobileMenu()">
            <router-link to="/">Luiz</router-link>
        </span>
        <ul options>
            <li>
                <router-link to="/consulta">Consulta</router-link>
            </li>
            <li>
                <router-link to="/modelos">Modelos</router-link></li>
            <li>
                <router-link to="/Login">Login</router-link>
            </li>
        </ul>  
       <button @click="changeCurrentMobileMenuSituation()">
            <img src="https://luzdigi.com.br/img/menu.png" alt="">
        </button>
        <div id="mobile-options" v-show="mobileMenuIsShowded">  
             <ul>
            <li>
                <router-link to="/consulta" @click="changeCurrentMobileMenuSituation()"><Button class="btn-link">Consulta</Button></router-link>
            </li>
            <li>
                <router-link to="/modelos" @click="changeCurrentMobileMenuSituation()"><Button class="btn-link">Modelos</Button></router-link>
            </li>
            <li>
                <router-link to="/login" @click="changeCurrentMobileMenuSituation()"><Button class="btn-link">Login</Button></router-link>
            </li>
        </ul> 
    </div>
    </header>
</template>

<script>
    export default{
        name: "Navigation",
        data(){
            return{
                mobileMenuIsShowded:false
            }
        },
        methods:{
            changeCurrentMobileMenuSituation(){
                this.mobileMenuIsShowded = !this.mobileMenuIsShowded;
            },
            closeMobileMenu(){
                this.mobileMenuIsShowded = false;

            }
        }
    }
</script>

<style  scoped>
 

    #menu{
        display: flex;
        width: 100%;
        height: 50px;
        background-color: #222;
        color: #ccc;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
      
    }

    #logo a{
        height: 80%;
        display: flex;
        align-items: center;
        font-family: 'Dancing Script', cursive;
        font-size: 1.3em;
    }

    [options]{
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 40%;
        height: 80%;
        align-items: center;
        margin: 0;
      
    }

    [options] a{
      padding: 10px;
      border-radius: 2px;
    }

    [options] a:hover{
        background-color: #444;
    }

    #mobile-options{
        height: max-content;
        position: absolute;
        top: 50px;
        right: 0px;
        background-color: white;
        color: black; 
        width: 100%;
        z-index: 10;
        padding: 4px 20px;
        
    }

    #mobile-options ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .btn-link{
        display: flex;
        justify-content: center;
        width: 100%;
        margin: 10px auto;
        background-color: #222;
        color: white;
        font-weight: bold;
        box-sizing: border-box;
        padding: 4px;
        height: 40px;
        text-decoration: none;
    }

    button{
        height: 80%;
        background-color: inherit;
        border: 0 none;
        border-radius: 10px;
        margin-right: 10px;
        width: max-content;
        padding: 10px;
        cursor: pointer;
        display: none;
        transition: .5s;
        align-items: center;
        
    }

    button:hover{
        background-color: #444;
    }

    img{
        width: 20px;
        margin: auto;
    }

    @media (max-width: 700px) { 

     [options]{
        display: none;
     }
     button{
        display: flex;
     }
     
    }

    @media(min-width: 800px){
        #mobile-options{
            display: none;
        }
    }


</style>