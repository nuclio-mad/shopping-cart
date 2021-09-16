import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCard } from "../../Components/ProductCard/ProductCard"
import './home.css'

export const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/products`)
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