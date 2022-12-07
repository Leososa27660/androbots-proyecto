import Item from './Item';




const ItemList = (props) => {
  return (
    <>
    {
  props.datos.map(item => <Item key={item.id} nombre={item.nombre} imagen={item.imagen} descripcion={item.descripcion}/>)

    }

      
    </>
  )
}

export default ItemList