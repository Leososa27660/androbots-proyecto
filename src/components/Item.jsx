import {Link} from "react-router-dom"

const Item = (item) => {
  return (
  
    <div className="card" >
        {item.nombre}      
        <div className="card_img">
        <img src= {item.imagen} width="250px"/>  
        {item.descripcion}
        
        <div className="card__meta">
          
      <span className="card__category">ロボット</span>
      <span className="card__year">2022</span>
          
   <Link to={`/androbots-proyecto/item/${item.id}`}><button>Detalle</button></Link>
    </div>
        </div>      
          </div>     
  )
}

export default Item