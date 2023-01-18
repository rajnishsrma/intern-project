import React from 'react';
import './App.css';
import CartTable from './components/activeCartTable/CartTable';
import MenuOne from './components/menus/Menu1/MenuOne';
import Topbar from './components/topbar/Topbar';
import CartPage from './pages/cartpage/CartPage';
import { BrowserRouter, Routes , Route} from "react-router-dom";
import CreateOrder from './pages/createOrder/CreateOrder';
import ConfigOrders from './pages/configOrder/ConfigOrder';


    


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar />
        <Routes>
          <Route path="/" element={<CartPage />} />
          <Route path="/createorder" element={<CreateOrder />} />
          <Route path="/configorder" element={<ConfigOrders />} />
        </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
