import {useState, useEffect} from "react"
import { customFetch } from "../utils/customFetch";
import { products } from "../utils/products";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idProducto } = useParams();

    useEffect(() => {
        if(idProducto){

            customFetch(2000, products.find(item => item.id === parseInt(idProducto)))
            .then(result => setDato(result))
            .catch(err => console.log(err))

        }
        else{
            customFetch(2000, products)
            .then(result => setDato(result))
            .catch(err => console.log(err))
        }
       

       
    }, [idProducto]);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;