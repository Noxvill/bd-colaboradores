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
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [mensajeAlerta, setMensajeAlerta] = useState({ mensaje: '', tipo: '' });


  // Función para agregar un colaborador
  const agregarColaborador = colaborador => {
    if (!colaborador.nombre || !colaborador.correo || !colaborador.edad || !colaborador.cargo || !colaborador.telefono) {
      setMensajeAlerta({ mensaje: 'Todos los campos son obligatorios', tipo: 'error' });
      return;
    }
  
    setListacolaboradores(prevColaboradores => [...prevColaboradores, colaborador]);
    setMensajeAlerta({ mensaje: 'Registro Exitoso', tipo: 'exito' });
  };
  
 
// Función para actualizar el término de búsqueda
const actualizarBusqueda = (busqueda) => {
  setTerminoBusqueda(busqueda);
};

// Filtrar colaboradores según el término de búsqueda
const colaboradoresFiltrados = Listacolaboradores.filter(colaborador =>
  colaborador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
);


  return (
    <>
<h2 className="ListColabTitle">Lista de Colaboradores</h2>

<Buscador actualizarBusqueda={actualizarBusqueda}/>
<Listado Listacolaboradores={colaboradoresFiltrados} />
<Formulario agregarColaborador={agregarColaborador} setMensajeAlerta={setMensajeAlerta}/>
<Alert mensaje={mensajeAlerta} />
    </>
  )
}

export default App
