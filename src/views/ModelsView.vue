<template>
   <div class="search-container">
        <h1>Pesquise o Modelo</h1>
        <div id="serach-bar">
            <input placeholder="Onix" type="text">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div id="models-info">
            <table>
               <tr>
                    <th>
                        Marca
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Fabri-Ano
                    </th>
                    <th>
                        Modelo-Ano
                    </th>
                    <th>
                        Quantidade-passageiros
                    </th>
               </tr>
                <tr>
                    <td>
                        Chevrolet
                    </td>
                    <td>
                        Onix
                    </td>
                    <td>
                        2020
                    </td>
                    <td>
                        2021
                    </td>
                    <td>
                        5
                    </td>
                </tr>
            </table>
            <p>Não encontrou o modelo desejado? Adicione</p>
           
        </div>
   </div>
</template>
<!--
     {"id":1,
     "brand":"Chevrolet",
     "modelName":"Onix",
     "fabricationYear":"2023",
     "modelYear":"2023",
     "passengers":5} -->
<script>


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
        border-radius: 4px;
        max-width: 800px;
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
   
  tr:hover{
    background-color: #ccc;
  }


  #models-info p{
    font-size: .9em;
    margin-top: 20px;
  }

 
</style>