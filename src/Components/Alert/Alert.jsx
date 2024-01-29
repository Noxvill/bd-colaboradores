const Alert = ({ mensaje }) => {
    if (!mensaje || !mensaje.mensaje) return null;
  
    return (
      <p className={mensaje.tipo === 'error' ? 'errorAlert' : 'success'}>
        {mensaje.mensaje}
      </p>
    );
  };

  export default Alert