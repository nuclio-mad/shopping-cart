import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './Home/Home'
import { Product } from "./Product/Product";
import { Cart } from './Cart/Cart'
import { Menu } from '../Components/Menu/Menu'

export const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/products/:id" component={Product} />
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}