import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../../Contexts/Cart"
import './product.css'

export const Product = () => {
  const { id } = useParams()
  const cartContext = useCart()

  const [product, setProduct] = useState()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data)
      })
  }, [id])

  const addToCart = () => {
    cartContext.addProduct(product)
  }

  if (!product) {
    return null
  }

  return (
    <div id="product">
      <div className="image">
        <img className="image" src={product.image} alt={product.title} />
      </div>
      <div className="info">
        <h1 className="title">{product.title}</h1>
        <p className="description">{product.description}</p>
        <button onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  )
}