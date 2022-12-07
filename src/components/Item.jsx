import {Link} from 'react-router-dom';


const Item = (props) => {
  return (
    
   

    <Link to={'/androbots-proyecto/item/:idProducto'}>
    <div className="card" >
        {props.nombre}
        {props.id}
        <div className="card_img">
        <img src= {props.imagen} width="250px"/>  
        {props.descripcion}
        
        <div className="card__meta">
      <span className="card__category">カテゴリー1</span>
      <span className="card__year">2022</span>
      
   <button>Detalles</button> 
    </div>
        </div>      
        </div>
        </Link>
  )
}




export default Item