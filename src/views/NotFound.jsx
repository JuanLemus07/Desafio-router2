import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="notFound">
      <img className="e404" src="../assets/img/error404poke2.png" alt="Error 404" />
      <div className="volver">
        <Link to="/"><button>Volver</button></Link>
      </div>
    </div>
  )
}

export default NotFound
