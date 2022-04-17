
// Creo un componente al que le puedo pasar varios tipos de props, y que me devuelve una "tipo" de elemento.
const Mensaje = ({ children, tipo }) => {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje