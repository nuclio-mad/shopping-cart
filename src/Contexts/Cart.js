import React, { useContext, useState } from 'react'

const initialCartContext = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {}
}

const CartContext = React.createContext(initialCartContext)

export const useCart = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  const [products, setProducts] = useState([])

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const removeProduct = (productId) => {
    const productsRemoved = products.filter(product => product.id !== productId)
    setProducts(productsRemoved)
  }

  const cartContext = {
    products,
    addProduct,
    removeProduct
  }

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}