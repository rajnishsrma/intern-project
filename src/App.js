import React from 'react';
import './App.css';
import Topbar from './components/topbar/Topbar';
import CartPage from './pages/cartpage/CartPage';
import { BrowserRouter, Routes , Route} from "react-router-dom";
import CreateOrder from './pages/createOrder/CreateOrder';
import ConfigOrders from './pages/configOrder/ConfigOrder';
import ConfigOptionPg from './pages/configOptions/ConfigOptionPg';
import PlaceOrderPg from './pages/placeorderpage/PlaceOrderPg';


    


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route path="/" element={<CartPage />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/configorder" element={<ConfigOrders />} />
          <Route path='/configoption' element={<ConfigOptionPg />}/>
          <Route path='/placeorder' element={<PlaceOrderPg />} />
        </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
