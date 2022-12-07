import {useState, useEffect} from "react"
import { customFetch } from "../utils/customFetch";
import { products } from "../utils/products";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idProducto } = useParams(5);

    useEffect(() => {
        customFetch(2000, products.filter(item => item.id == idProducto))
            .then(resuelve => setDato(resuelve))
            .catch(err => console.log(err))
    },[])

    return (
        <ItemDetail item={dato} />
    );

}
   

export default ItemDetailContainer