import { BaseColaboradores } from "../Js/BaseColaboradores"
import { useState } from 'react'
import Table from 'react-bootstrap/Table';
import './Listado.css'
import Formulario from "../Formulario/Formulario";

const Listado =(props)=>{
  console.log("Colaboradores recibidos en Listado:", props.Listacolaboradores);


return (
<>
<br></br>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
    {props.Listacolaboradores.map(colaborador => (
      <tr key={colaborador.nombre}>
        <td>{colaborador.nombre}</td>
        <td>{colaborador.correo}</td>
        <td>{colaborador.edad}</td>
        <td>{colaborador.cargo}</td>
        <td>{colaborador.telefono}</td>
      </tr>
    ))}
    </tbody>
    </Table>
   
</>

)
}

export default Listado