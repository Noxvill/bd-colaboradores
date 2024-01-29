import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.css'
import { useState } from 'react'
import { BaseColaboradores } from '../Js/BaseColaboradores';


const Formulario =(props)=>{
const [nombre, setNombre] = useState("")
const [correo, setCorreo] = useState("")
const [edad, setEdad] = useState("")
const [cargo, setCargo] = useState("")
const [telefono, setTelefono] = useState("")



const idRandom = () => {
    const idRandom = Math.floor(Math.random() * 100); // Genera un número aleatorio entre 0 y 99
    // console.log(idRandom); // Muestra el número aleatorio en la consola (puedes usarlo de otra manera según tus necesidades)
return idRandom
}


//Funciones para capturar datos al escribir sobre el input del formulario
const capturaInputName = (e) => {
    setNombre(e.target.value)
   
}

const capturaInputMail = (e) => {
    setCorreo(e.target.value)
    
}

const capturaInputAge = (e) => {
    setEdad(e.target.value)
    
}

const capturaInputStatus = (e) => {
    setCargo(e.target.value)
    
}

const capturaInputPhone = (e) => {
    setTelefono(e.target.value)
   
}


// Función al enviar el formulario
const enviarFormulario = (e) => {
    e.preventDefault()
    
    // Genero un id aleatorio, solo para prueba
    const id= idRandom()
    const nuevoColaborador = { id, nombre, correo, edad, cargo, telefono };
    props.agregarColaborador(nuevoColaborador); // Actualiza la lista en el componente App
   
    // Vaciamos el formulario
        setNombre("") 
        setCorreo("")
        setEdad("")
        setCargo("")
        setTelefono("")
        
        }
    

return(
    
<>

<Form style={{ padding: '30px', height:'33rem' ,width: '21rem', border: '2px solid white', borderRadius: '40px',backgroundColor: 'white'}} onSubmit={enviarFormulario}>
<h3>Agregar Colaborador</h3>
<Form.Group className="mb-3" controlId="nombre" >
<Form.Control type="text" placeholder="Nombre del colaborador" onChange={capturaInputName}
value={nombre}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="mail" placeholder="Email del colaborador" onChange={capturaInputMail}
value={correo}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="number" placeholder="Edad del colaborador" onChange={capturaInputAge}
value={edad}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="txt" placeholder="Cargo del colaborador" onChange={capturaInputStatus}
value={cargo}/>
      </Form.Group>

      <Form.Group className="mb-3">
       <Form.Control type="number" placeholder="Teléfono del colaborador" onChange={capturaInputPhone}
value={telefono}/>
      </Form.Group>

      <Button style={{ width: '16rem', background: 'blue', textAlign: 'center' }} type="submit">
        Agregar Colaborador
      </Button>
      
 </Form>

</>

    )
}

export default Formulario