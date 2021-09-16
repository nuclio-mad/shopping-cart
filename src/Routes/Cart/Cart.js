import { useCart } from "../../Contexts/Cart"
import './cart.css'

export const Cart = () => {
  const cart = useCart()

  const total = cart.products.reduce((acc, product) => acc + product.price, 0)

  if (!cart.products.length) {
    return (<div className="cart">No hay productos en el carrito</div>)
  }

  const removeProduct = (id) => {
    cart.removeProduct(id)
  }

  return (
    <div className="cart">
      <table>
        {cart.products.map((product) => (
          <tr>
            <td>{product.title}</td>
            <td>{product.price}€</td>
            <td><button onClick={() => removeProduct(product.id)}>Remove</button></td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td>{total}€</td>
        </tr>
      </table>
    </div>
  )
}