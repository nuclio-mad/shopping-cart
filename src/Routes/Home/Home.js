import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "../../Components/ProductCard/ProductCard"
import './home.css'

export const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data)
      })
  }, [])

  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}