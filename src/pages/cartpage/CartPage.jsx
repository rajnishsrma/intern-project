import React from 'react';
import CartTable from '../../components/activeCartTable/CartTable';
import MenuOne from '../../components/menus/Menu1/MenuOne';
// import 'cartpage.css';


function CartPage(){
    return <div>
         <MenuOne />
        <CartTable />
    </div>
}

export default CartPage;