import { useEffect, useState } from "react";
import ItemList from './ItemList';
import {products} from '../utils/products';
import {customFetch} from '../utils/customFetch';
import {useParams} from 'react-router-dom';

const ItemListContainer = () =>
{
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams ();

    

    useEffect(() =>{
        if(idCategory){
            customFetch(2000, products.filter(item => item.categoryId === idCategory))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
        else{
            customFetch(2000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        }
       

    }, [idCategory])

    return (
        <ItemList datos={datos}/>
    )


}

export default ItemListContainer;