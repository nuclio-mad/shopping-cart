import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './Home'
import { Product } from "./Product";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products/:id" component={Product} />
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}