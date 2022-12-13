import Item from './Item';




const ItemList = (props) => {
  return (
    <>
    {
 

  props.datos.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} imagen={item.imagen} descripcion={item.descripcion} precio={item.precio}/>)
  
    }

      
    </>
  )
}

export default ItemList