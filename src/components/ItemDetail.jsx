

import React from 'react'
import {useState} from 'react'


const ItemDetail = ({item}) => {


  
const [count, setCount,] = useState (1);

const decrement = () => {

  setCount(count -1); 
}
 
const increment = () => {

  setCount(count +1); 
}

const onAdd = (quantity) => {
  alert(`Compraste ${quantity} unidades`)
}


  return (
      <>
      {
       
          <div className="card" >
            {item.nombre}  
          <div className="card__meta">
            
          <div className="card_img">
          <img  src={item.imagen}  width="500px"/>  
         
        </div>    
      
        <span className="card__category">ロボット</span>
        <span className="card__year">2022</span>
        
       </div>
      
       <div class="card-body">
       
      <h5 class="card-title">Descripción</h5>

      <p class="card-text"> {item.descripcion}</p>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">{item.precio}</li>
      
      </ul>
        <hr />

      <div className="contador">
        <button disabled={count <=0} onClick={decrement}>-</button>
        <span>{count}</span>
        <button disabled={count >=3} onClick={increment}>+</button>
      </div>
      <div>
        <button disabled={count <=0} onClick={() => onAdd(count)} >Agregar al carrito</button>
      </div>
           </div> 
       
      }
      </>
  );
}

export default ItemDetail;



 
