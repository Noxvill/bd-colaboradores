import { useState } from 'react'
import './App.css'
import Listado from './Components/Listado/Listado'
import Formulario from './Components/Formulario/Formulario'
import Buscador from './Components/Buscador/Buscador'
import Alert from './Components/Alert/Alert'
import { BaseColaboradores } from './Components/Js/BaseColaboradores'


function App() {
  const [alerta, setAlerta] = useState()
  const [Listacolaboradores, setListacolaboradores] = useState(BaseColaboradores)

  // Función para agregar un colaborador
  const agregarColaborador = colaborador => {
    setListacolaboradores(prevColaboradores => {
      const nuevosColaboradores = [...prevColaboradores, colaborador];
      console.log("Lista actualizada de colaboradores:", nuevosColaboradores); // Imprime la lista actualizada
      return nuevosColaboradores;
    });
  };
 
  return (
    <>
<h2 className="ListColabTitle">Lista de Colaboradores</h2>
<Buscador/>
<Listado Listacolaboradores={Listacolaboradores}/>
<Formulario agregarColaborador={agregarColaborador}/>

    </>
  )
}

export default App
