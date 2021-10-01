import React from 'react'
import "../../styles/styles.css"



const NuevaVenta = () => {

    const Productos = [
        {
            id: 1,
            nombre: "Televisor 60 pulgadas",
            precioUnidad: 2700000,
        },
        {
            id: 2,
            nombre: "Equipo de sonido marca PGH",
            precioUnidad: 1200000,
        },
        {
            id: 3,
            nombre: "Nevera 400L marca HHH",
            precioUnidad: 2200000,
        }

    ];

    return (
        <div>

            <main class="mainContainer">

                <div class="contenedor-titulo">
                    <h1 class="titulo">Registro nueva venta</h1>
                </div>
                <div class="contenedor-span">
                    <span class="spanTexto">NombreCompletoVendedor+ID</span>
                    <div class="buscar">
                        <input id="inputBuscar" placeholder="Cliente" />
                        <i class="fas fa-search botonGenerico iconoBusqueda"></i>
                    </div>
                    <div class="contenedor-fechas">

                        <label for="fechaDePago" class="fechaPago">Fecha de Pago  </label>
                        <input type="date" class="InputfechaDePago" id="fechaDePago" />

                    </div>
                    <span class="spanTexto">Número de venta BD</span>
                </div>


                <div class="contenedorAgregarProducto">
                    <div class="buscar">
                        <select id="inputBuscar" placeholder="Buscar un producto">
                            {Productos.map((producto) => (
                                <option value={producto.id}>{producto.nombre}</option>
                            ))}
                        </select>
                        <i class="fas fa-search botonGenerico iconoBusqueda"></i>

                    </div>
                    <div class="cantidad">
                        <input placeholder="Cantidad" />
                    </div>
                    <div class="btnAgregarProducto bg-blue-500">
                        <button class="btnAgregar">Agregar</button>
                    </div>
                </div>

                <div class="table w-full p-2">
                    <table class="w-full border">
                        <thead>
                            <tr class="bg-gray-50 border-b">
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        ID producto
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Producto
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Valor Unitario ($)
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Cantidad

                                    </div>
                                </th>

                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Opción

                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">1</td>
                                <td class="p-2 border-r">Producto1</td>
                                <td class="p-2 border-r">123.455</td>
                                <td class="p-2 border-r">2</td>
                                <td>
                                    <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Borrar</a>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">2</td>
                                <td class="p-2 border-r">Producto2</td>
                                <td class="p-2 border-r">10.395</td>
                                <td class="p-2 border-r">1</td>
                                <td>
                                    <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Borrar</a>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">3</td>
                                <td class="p-2 border-r">Producto3</td>
                                <td class="p-2 border-r">47.582</td>
                                <td class="p-2 border-r">3</td>
                                <td>
                                    <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Borrar</a>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">4</td>
                                <td class="p-2 border-r">Producto4</td>
                                <td class="p-2 border-r">58.980</td>
                                <td class="p-2 border-r">4</td>
                                <td>
                                    <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Borrar</a>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">5</td>
                                <td class="p-2 border-r">Producto5</td>
                                <td class="p-2 border-r">236.471</td>
                                <td class="p-2 border-r">12</td>
                                <td>
                                    <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Borrar</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="contenedorValorTotal-Guardar">
                    <div class="valorTotal">
                        <label for="valorTotal" class="LabelvalorTotal">Valor Total ($)</label>
                        <input type="text" class="InputValorTotal" name="valorTotal" id="valorTotal" readonly />
                        <button class="BtnGuardar">Guardar</button>
                    </div>


                </div>

            </main>


        </div>
    )
}

export default NuevaVenta
