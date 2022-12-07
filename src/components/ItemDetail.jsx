import {Link} from 'react-router-dom';

const ItemDetail = (props) => {
   return (
     <>
       <Link to={'/androbots-proyecto/item/:idProducto'}>
     <div className="card2" >
        
    
     {props.nombre}
        
        <div className="card_img">
        <img src= {props.imagen} width="250px"/>  
        {props.descripcion}
        
        <div className="card__meta">

        <div className="card_img">
        <img src= {props.imagen} width="250px"/>  
        {props.descripcion}
      </div>    
      <span className="card__category">カテゴリー1</span>
      <span className="card__year">2022</span>
     </div>

     <div class="card-body">
    <h5 class="card-title">Detalles</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">$</li>
  
  </ul>
         </div>      
         </div>
         
         </Link>
      
      </>
      
   )
 }


export default ItemDetail




