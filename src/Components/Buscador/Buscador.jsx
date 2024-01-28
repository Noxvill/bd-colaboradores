import Form from 'react-bootstrap/Form';

const Buscador =({ actualizarBusqueda })=>{

return(

<>

<Form.Control
        type="text"
        id="inputcolaborador"
        placeholder="Busca un colaborador"
        className="form-control-sm"
        onChange={(e) => actualizarBusqueda(e.target.value)}
      />
</>

)

}
export default Buscador