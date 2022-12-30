import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext"

const App = () => {

  
return(
<CartContextProvider>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path = '/androbots-proyecto/' element = {<ItemListContainer/>}/>
<Route path = '/androbots-proyecto/category/:idCategory' element = {<ItemListContainer/>}/>
<Route path = '/androbots-proyecto/item/:idItem' element = {<ItemDetailContainer/>}/>
<Route path = '/androbots-proyecto/cart'  element = {<Cart/>}/>
</Routes>
</BrowserRouter>
</CartContextProvider>

)



}


export default App

