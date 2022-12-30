import {  useContext, React } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "./CartContext";
 
const CartWidget = () => {
    const carro = useContext(CartContext);
       
    return (
      <>     
        <p>{carro.calcItemsQty() || ''} </p>
        <FaShoppingCart /> 
      </>
    );
    }

export default CartWidget;

