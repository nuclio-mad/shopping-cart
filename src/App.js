import { Router } from "./Routes";
import { CartContextProvider } from './Contexts/Cart'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </div>
  );
}

export default App;
