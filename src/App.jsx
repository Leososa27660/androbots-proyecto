import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

import './App.css'

const App = () => {

  let name ="Androbots"
return(
<>
<Navbar/>

<ItemListContainer mensaje= "La Ley Zeroth: 'un robot no puede dañar a la humanidad o, por inacción, permitir que la humanidad sufra daños'." />
  <h1>Bienvenidos a la página de {name}</h1>
  <hr />
  <h2>¿Quienes somos?</h2>
 
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aperiam ex consectetur nisi reiciendis praesentium quidem? Sit repudiandae aut iusto et temporibus iste similique nulla, quo deleniti dolor minima ut.</p>
</>

)



}


export default App
