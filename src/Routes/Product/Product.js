import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './product.css'

export const Product = () => {
  let { id } = useParams()

  const [product, setProduct] = useState()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data)
      })
  }, [id])

  console.log(product)
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
      </div>
    </div>
  )
}