<template>
   <div class="search-container">
        <h1>Pesquise o Modelo</h1>
        <div id="serach-bar">
            <input @keyup="showModelsInfo()" placeholder="Onix" type="text" v-model="modelName">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div id="models-info" v-show="tableIsShow">
            <table>
               <thead class="t-head">
                    <th>
                        Marca
                    </th>
                    <th>
                        Nome-ID
                    </th>
                    <th>
                       Ano-Fabri
                    </th>
                    <th>
                        Ano-Mdlo
                    </th>
                    <th>
                        Passageiros
                    </th>
               </thead>
                <tr v-for="model in modelsData" :key="model.id">
                    <td>
                        {{ model.brand }}
                    </td>
                    <td>
                        {{ model.modelName }} {{model.id}}
                    </td>
                    <td>
                        {{ model.fabricationYear }}
                    </td>
                    <td>
                        {{ model.modelYear }}
                    </td>
                    <td>
                        {{ model.passengers }}
                    </td>
                </tr>
            </table>
            <p>Não encontrou o modelo desejado? <router-link to="/modelos/cadastro" class="link">Adicione</router-link> </p>
           
        </div>
   </div>
</template>

<script>

    export default {
        name:"ModelsView",
        props:{
            baseURL:String
        },
        data(){
            return{
                modelsData: [],
                tableIsShow:false,
                modelName: "",
                modelInfo:{}
            }

        },
        methods:{
            async findModels(name){

         

                const req =  await fetch(this.baseURL + `/api/models/find/${name}`);

                this.modelsData = await req.json();
            },
            showModelsInfo(){
                if(this.modelName === "" || this.modelName.match(/ {1,}/)){
                    this.tableIsShow = false;
                    return;
                }
                this.findModels(this.modelName);
                this.tableIsShow = true;
            },
            async findModelById(id){
                const req = await fetch(this.baseURL + `/api/models/${id}`);
            },
            showModelInfo(){

            }
        }
    }

</script>




<style scoped>
    .search-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        

    }

    #serach-bar{
        border: 1px solid #ccc;
        width: 70%;
        padding: 6px 20px;
        border-radius: 30px;
        max-width: 550px;
    }

    input{
        border: 0 none;
    }
    input{
        border: 0 none;
        width: 92%;
    }
    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    
    i{
        cursor: pointer;
        width: 8%;
        text-align: center;

    }

   
    #models-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      
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

  .t-head{
    background-color: #36304a;
    color: rgb(255, 255, 255);
  }


  td, th{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 12px 12px;
 
}

  
    
    table tr:nth-child(odd){
        background-color: #ccc;
    }


  #models-info p{
    font-size: .9em;
    margin-top: 20px;
  }

  .link{
    text-decoration: underline;
  }

  @media (max-width:700px){
    table{
        width: 95%;
    }
  }

</style>