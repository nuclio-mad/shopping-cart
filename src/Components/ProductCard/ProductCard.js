import './productCard.css'
import { Link } from "react-router-dom";
export const ProductCard = ({product}) => {
  return (
    <div className="productCard">
      <div className="image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="info">
        <span>{product.title}</span>
        <p>{product.info}</p>
        <Link to={`products/${product.id}`}>Más info</Link>
      </div>
    </div>
  )
}