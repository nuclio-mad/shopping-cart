import { Link } from "react-router-dom";
import './menu.css'

export const Menu = () => {
  return (
    <div className="menu">
      <h1>Nuclio shop</h1>
      <div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="">Carrito</Link>
      </div>
    </div>
  )
}