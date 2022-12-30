import {useContext} from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { serverTimestamp, doc, setDoc,collection, increment, updateDoc} from "firebase/firestore";
import {db} from "../utils/firebaseConfig"

const Cart = () => {
 const {cartList, deleteThis, removeList, precioTotal, productosTotal } = useContext(CartContext);
    
 const createOrder = () => {
        const order = {
                comprador: {
                        Nombre: 'Rick',
                        Apellido: 'Gomez',
                        email: 'RickGomez@coderhouse.com',
                        Telefono: '11275465025'
                },
                Fecha: serverTimestamp(),
                items: cartList.map(item => ({
                id: item.id,
                title: item.nombre,
                price: item.precio,
                qty: item.quantity
                })),
                total: precioTotal()
                }

        const createOrderInFirestore = async() => {
                const newOrderRef = doc (collection (db, "orders"))
                await setDoc(newOrderRef, order);
                return newOrderRef        
        }
        
        createOrderInFirestore()
        .then (result =>{ alert ('La compra se realizo correctamente ' + result.id ) 
        cartList.forEach (async(item)=>{
                const itemRef = doc(db, "productos", item.id);
        await updateDoc(itemRef, {stock: increment(-item.quantity)});
        })
        removeList() 
        })
        .catch (err => console.log(err))
        }

        return (
        <> 
        <ul>

        <div className="card" >

        {   cartList.length === 0
            ? <p>Tu carrito esta vacio</p>
            : cartList.map (item => <li key={item.id}>   <div className="card__meta"> ${item.precio} - {item.nombre} </div> <br />
            <div className="card_img">
            <img src={item.imagen[0]} alt="" width="100px" height="100px" /> </div> <br /> Cantidad: {item.quantity}  <br />  <br />     <p>SubTotal: $ {item.precio * item.quantity} </p>   <button onClick={ () => deleteThis(item.id)}>Borrar Producto</button>

          <hr /> </li>)
          
        }
        
        </div>
        
        <div className="card" >
        <p>¿Qué desea hacer?</p>
        <hr />
        <Link to='/androbots-proyecto/'><button>Continuar Comprando</button></Link>
        <hr />
                {
                    (cartList.length > 0)
                    ? <button type="filled" onClick={ () => removeList(removeList) }>Borrar todos los productos</button>
                    : <p>Mira nuestros productos</p>
                }
        </div>
        <div className="card" >
        <h3>Orden de Compra <hr /> Mis compras  <FaShoppingCart/> {productosTotal() || ''}  </h3>
        <p> Precio Total ${precioTotal()}</p> 
        <Link to = '/androbots-proyecto/cart' ><button variant="contained" color="secondary" onClick={createOrder}> CHECKOUT NOW</button></Link> 
        </div>
        </ul>
        </>
    );

}

export default Cart;