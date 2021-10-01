import React from 'react';

const RegistroProductos = () => {

    return (
        <div>
            <main>
    
      
           <h1>REGISTRO DE PRODUCTO</h1>          
         
    <form >
        <div class="ident">
            <label for="IDproduc">ID</label>
            <input type="text" class="id" id="IDproduct"/> 
        </div>

        <div class="ident">
            <label for="produc" >PRODUCTO</label>
            <input type="text" id="produc"/>
        </div>

        <div class="ident">
            <label for="descrip" >DESCRIPCION</label>
            <input type="text" id="descproduc"/>
        </div>

        <div class="ident">
            <label for="valorunit" >VALOR UNITARIO</label>
            <input type="text" class="id" id="valorunit"/>
        </div>
        
        <div class="ident">
            <label>ESTADO</label>
            <select>
                 <option selected disabled>Seleccione una opcion</option>                
                 <option>Disponible</option>
                 <option>No disponible</option>
            </select>
        </div>

        <div class="boton">
            <button>Agregar</button>
            

        </div>
        
        
    </form>


</main> 

        </div>
    )
   
};

export default RegistroProductos;