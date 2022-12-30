import Item from "./Item"

const ItemList = ({ items }) => {
    return (
        <>
        {
            items.length > 0 
            ? items.map(item => <Item key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen[0]} stock={item.stock} descripcion={item.descripcion}/>)
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemList;







