import ItemCount from "./ItemCount";
import React from "react"

const ItemCount = () => {

    const onAdd = (quantity) => {
        consol.log(`Compraste ${quantity} unidades`)
    }
    return (
        <>
        <ItemCount initial={count} stock={3} onAdd={onAdd}/>
        {
        count === 0
        ? <ItemCount stock={3} initial={count} onAdd={onAdd}/>
        : <Link to = '/cart' ><button variant="contained" color="secondary">Checkout</button></Link> 
        }
        </>    
    )
  }
  
  
  
  

export default ItemCount;


  


