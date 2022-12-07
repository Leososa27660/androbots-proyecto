import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {

  
return(
<BrowserRouter>
<Navbar/>


<Routes>

<Route path = '/androbots-proyecto/' element = {<ItemListContainer/>}/>

<Route path = '/androbots-proyecto/category/:idCategory' element = {<ItemListContainer/>}/>
<Route path = '/androbots-proyecto/item/:idProducto' element = {<ItemDetailContainer/>}/>
</Routes>
</BrowserRouter>

)



}


export default App

