<template>
    <header id="menu">
        <span id="logo" @click="closeMobileMenu()">
            <router-link to="/">Luiz</router-link>
        </span>
        <div class="cad-opts desktop-cad" v-show="cadOptIsShowed">
            <router-link to="/cadastro" @click="changeCurrentShowCadOpt"><Button class="btn-link">Veículos</Button></router-link>
            <router-link to="/modelos/cadastro" ><Button class="btn-link" @click="changeCurrentShowCadOpt">Modelos</Button></router-link>
            <router-link to="/usuario/cadastro" ><Button class="btn-link" @click="changeCurrentShowCadOpt">Uusário</Button></router-link>
        </div>
        <ul options>
            <li>
                <router-link to="/consulta">Consulta</router-link>
            </li>
            <li>
                <router-link to="/modelos">Modelos</router-link>
            </li>
            <li>
                <a class="btn-cad" @click="changeCurrentShowCadOpt" >
                    Cadastros
                </a>
            </li>
            
            <li>
                <router-link to="/usuario/login">Login</router-link>
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
               <Button class="btn-link" @click="changeCurrentShowCadOptMobile">Cadastros</Button>
            </li>
            <div class="cad-opts" v-show="cadMobileOptIsShowed">
                <li>
                    <router-link to="/cadastro" @click="changeCurrentMobileMenuSituation"><Button class="btn-link">Veículos</Button></router-link>
            </li>
            <li>
                <router-link to="/modelos/cadastro" @click="changeCurrentMobileMenuSituation()"><Button class="btn-link">Modelos</Button></router-link>
            </li>
            <li>
                <router-link to="/usuario/cadastro" @click="changeCurrentMobileMenuSituation()"><Button class="btn-link">Usuários</Button></router-link>
            </li>
            </div>


            <li>
                <router-link to="/usuario/login" @click="changeCurrentMobileMenuSituation()"><Button class="btn-link">Login</Button></router-link>
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
                mobileMenuIsShowded:false,
                cadOptIsShowed:false,
                cadMobileOptIsShowed:false
            }
        },
        methods:{
            changeCurrentMobileMenuSituation(){
                  this.cadMobileOptIsShowed =false              
                  this.mobileMenuIsShowded = !this.mobileMenuIsShowded;
            },
            closeMobileMenu(){
                this.mobileMenuIsShowded = false;
            },
            changeCurrentShowCadOptMobile(){
                this.cadMobileOptIsShowed = !this.cadMobileOptIsShowed;
            }
            ,
            changeCurrentShowCadOpt(){
                this.cadOptIsShowed = !this.cadOptIsShowed
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
        width: 60%;
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

 

    .btn-cad{
        cursor: pointer;
    }

    .desktop-cad{
        position:absolute;
        right: 14%;
        top: 50px;
        color: black;
        width: 200px;
        background-color: white;
        padding: 10px;
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

    @media (max-width: 700px), (orientation: portrait) { 

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