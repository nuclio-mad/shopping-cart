import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/Cart";
import './menu.css'

export const Menu = () => {
  const cart = useCart()

  return (
    <div className="menu">
      <h1>Nuclio shop</h1>
      <div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/cart">Carrito</Link>
        <span>{cart.products.length}</span>
      </div>
    </div>
  )
}