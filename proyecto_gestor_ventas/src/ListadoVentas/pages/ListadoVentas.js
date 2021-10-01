import React from 'react';
import "./listadoventas.css";
import eliminar from './eliminar.png';
import editar from './editar.png';
import buscar from './buscar.png';

const ListadoVentas = () => {

    return (
        <main id="container">
        <h1>LISTADO DE VENTAS</h1>
        <form action="" method="get" class="form-search">
            <input type="text" name="busqueda" id="busqueda" placeholder="Id Venta"/>
            <button type="submit"  class="btn-search">< img src={buscar}/></button>
        </form>
        <div>
            <h5>Listar por fecha</h5>
            <form action="" method="get" class="form-search-date">
                <label>De:</label>
                <input type="date" name="fecha-de" id="fecha-de" required/>
                <label>A</label> 
                <input type="date" name="fecha-a" id="fecha-a" required/>
                <button type="submit" class="btn-view"><img src={buscar}/></button>

            </form>
        </div>
        <table>
            <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Vendedor</th>
                <th>Estado</th>
                <th class="textrigth">Total Factura</th>
                <th class="textright">Acciones</th>           

            </tr>
            <tr>
            <td>1</td>
                <td>2022-10-01</td>
                <td>Melanyn Grces</td>
                <td>Pedro Perez</td>
                <td>En proceso</td>
                <td>$200.000</td>
                <td>
                    <button class="btn-edit-venta">< img src={editar}/></button> 
                    <button class="btn-delete-venta">< img src={eliminar}/></button> 
                    
                </td>
               
            </tr>
        </table>
        <div class="paginador">
            <ul>
                <li><a href="#">|&lt;</a></li>
                <li><a href="#">|&lt;&lt;</a></li>
                <li class="pageSelected">1</li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;|</a></li>
                <li><a href="#">&gt;&gt;|</a></li>
            </ul>
        </div>
    </main>
        
    )

} 

export default ListadoVentas;