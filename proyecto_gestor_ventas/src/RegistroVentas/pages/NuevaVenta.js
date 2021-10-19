import React, { useState, useEffect } from 'react'
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


    const [productoSeleccionado, setProductoSeleccionado] = useState();
    const [indiceProducto, setIndiceProducto] = useState();
    const [cantidadVenta, setCantidadVenta] = useState();
    const [listaVenta, setListaVenta] = useState([]);
    //const [agregarProductos, setAgregarProductos] = useState([]);

   /*  useEffect(() => {
        console.log(cantidadVenta);
        console.log(productoSeleccionado);
        console.log(indiceProducto)
        setAgregarProductos({
            id: productoSeleccionado,
            producto: indiceProducto,
            cantidad: cantidadVenta
        })
    }, [cantidadVenta, productoSeleccionado]);
 */



    const agregarProducto = () => {
        const agregarProductos = [
            {
                id: productoSeleccionado,
                producto: indiceProducto,
                cantidad: cantidadVenta,
            }];
        console.log("SE AGREGO UN NUEVO PRODUCTO A LA LISTA",agregarProductos)
        setListaVenta([...listaVenta, agregarProductos]);
        console.log(listaVenta);
    }







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
                        <select onChange={(e) => {
                            setProductoSeleccionado(e.target.value)
                            setIndiceProducto(e.target.options[e.target.selectedIndex].text)
                        }}
                            id="inputBuscar" placeholder="Buscar un producto">
                            {Productos.map((producto) => (
                                <option value={producto.id}>{producto.nombre}</option>
                            ))}
                        </select>
                        <i class="fas fa-search botonGenerico iconoBusqueda"></i>

                    </div>
                    <div class="cantidad">
                        <input value={cantidadVenta} onChange={(e) => {
                            setCantidadVenta(e.target.value)
                        }} placeholder="Cantidad" />
                    </div>
                    <div class="btnAgregarProducto bg-blue-500">
                        <button onClick={agregarProducto} class="btnAgregar">Agregar</button>
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
                            {listaVenta.map((item) => {

                                    return (
                                        <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                            <td class="p-2 border-r">{item.id}</td>
                                            <td class="p-2 border-r">{item.producto}</td>
                                            <td class="p-2 border-r">precio</td>
                                            <td class="p-2 border-r">{item.cantidad}    </td>
                                            <td>
                                                <a href="#" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Borrar</a>
                                            </td>
                                        </tr>
                                    );
                                })


                            }
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
