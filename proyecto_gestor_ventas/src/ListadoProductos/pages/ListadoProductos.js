import Form from 'react-bootstrap/Form';
import "../../styles/styles.css"

const ListadoProductos = () => { 

return <h1> 
        <div className="bg-light text-secondary px-4 py-5 text-center">
      
      <div className="col-sm-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                
            
                <form className="d-flex">
                   <input className="form-control me-2" type="search" placeholder="Id/Nombre Producto" aria-label="Buscar" />
                     <button className="btn btn-outline-success" type="submit">Buscar</button>

                </form>
              </div>
            </div>
             </nav>
        </div>
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
                                        Descripción del Producto
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Valor Unitario
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Opcion

                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">1</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">123.455</td>
                                <td>
                                   <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0">Estado...</option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                    </Form.Select>                   
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">2</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">10.395</td>
                                <td>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0">Estado...</option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">3</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">47.582</td>
                                <td>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0">Estado...</option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">4</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">58.980</td>
                                <td>
                                   <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0">Estado...</option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                  </Form.Select>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                                <td class="p-2 border-r">5</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">236.471</td>
                                <td>
                                   <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0">Estado...</option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                   </Form.Select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </h1>
};

export default ListadoProductos;
