import { useParams } from "react-router-dom"

export const Product = () => {
  let { id } = useParams()

  return (
    <div>
      <h1>Esta es la página del producto {id}</h1>
    </div>
  )
}