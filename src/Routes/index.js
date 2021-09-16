import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './Home'
import { Product } from "./Product/Product";
import { Menu } from '../Components/Menu/Menu'

export const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/products/:id" component={Product} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}