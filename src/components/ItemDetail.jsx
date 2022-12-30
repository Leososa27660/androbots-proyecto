import {useState, useContext, React} from "react";
import Swal from "sweetalert2";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({item}) => {
  const [goToCart, setCountCart ] = useState(false);
  const [count, setCount,] = useState (0);
  const {addToCart} = useContext(CartContext);

  
const onAdd = (quantity) => {
  setCountCart(true);
  addToCart(item, quantity);
  Swal.fire({
    title: `<h1>Compraste ${quantity} unidades</h1>`,
    confirmButtonText:  `Aceptar`,
});  
}

const decrement = () => {
  setCount(count -1); 
}
 
const increment = () => {
  setCount(count +1); 
}

return (
  <>
  {
      <div className="card" >
        <>{item.nombre}</>
          <div className="card__meta">     
      <div className="card_img">
        <img  src={item.imagen}  width="500px"/>  
          </div>    
  
    <span className="card__category">ロボット</span>
    <span className="card__year">2022</span>
    
   </div>
  
   <div className="card-body">
    <h5 className="card-title">Descripción</h5>
    <p className="card-text"> {item.descripcion}</p>
    <h4> Stock: {item.stock}</h4>
    </div>
    <ul className="list-group list-group-flush">
    <li className="list-group-item">{item.precio}</li>
    </ul>
    <hr />

    <div className="contador">
    <button disabled={count <=0} onClick={decrement}>-</button>
    <span>{count}</span>
    <button disabled={count >=3} onClick={increment}>+</button>

   {
    goToCart
    ? <Link to = '/androbots-proyecto/cart' ><button variant="contained" color="secondary">Terminar Compra</button></Link> 
    :
    <button disabled={count <=0} onClick={() => onAdd(count)} >Agregar al carrito</button>
   }
   
      <>
        </>
          </div>
            </div> 
    }
      </>
    );
    }

export default ItemDetail;