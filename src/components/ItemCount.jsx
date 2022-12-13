import ItemCount from './ItemCount';
import React from react

const ItemCount = () => {

    const onAdd = (quantity) => {
        consol.log(`Compraste ${quantity} unidades`)
    }
    return (
      
        <>
        

        <ItemCount initial={1} stock={3} onAdd={onAdd}/>

        </>
     
          
    )
  }
  
  
  
  

export default ItemCount;

/* import { useEffect, useState } from 'react';
import {useState} from 'react'


const ItemCount = ({ stock = 0, initial = 1,  onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    },[]);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }

    
    return (
        <>
        {
         
            <div className="card" >
        
  
        <div className="contador">
          <button disabled={count <=0} onClick={decrement}>-</button>
          <span>{count}</span>
          <button disabled={count >=3} onClick={increment}>+</button>
        </div>
        <div>
          <button>Agregar al carrito</button>
        </div>
             </div> 
         
        }
        </>
    );
  }


export default ItemCount; */