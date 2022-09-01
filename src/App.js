import { Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import { Checkout } from './Components/Screen/Checkout/Checkout';
import { Purchase } from './Components/Screen/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Purchase/>}/>
         <Route path='/checkout' element={<Checkout/>}/>
         <Route path='*'element={<h1>NOT FOUND 404</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;