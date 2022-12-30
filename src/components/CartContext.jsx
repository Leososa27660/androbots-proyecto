import { createContext, useState} from "react"

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([]);
    const addToCart = (item, quantity) => {
        let found = cartList.find(product => product.id === item.id);
        if (found === undefined) {
        setCartList([
            ...cartList,
            {
                id: item.id,
                nombre: item.nombre,
                imagen: item.imagen,
                precio: item.precio,
                stock: item.stock,
                descripcion: item.descripcion,
                quantity: quantity
            }
        ])
    } else {
   
        found.quantityItem += quantity;setCartList([...cartList]);}
        }

        const removeList = () => {
        setCartList([]);
        }
  
        const precioTotal = () => {
        return cartList.reduce ((prev, act) => prev + act.quantity * act.precio, 0 );
        }

        const productosTotal = () => cartList.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity,0)

        const calcItemsQty = () => {
        let qtys = cartList.map(id => id.quantity);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
        }

        const deleteThis = (id) => {
        let borrando = cartList.filter ( item => item.id !== id);
        setCartList (borrando);
        }

        return (
        <CartContext.Provider value= {{cartList, addToCart, deleteThis, removeList,  precioTotal, productosTotal,  calcItemsQty}}>
            {children}
            </CartContext.Provider>
        )
        }

export default CartContextProvider