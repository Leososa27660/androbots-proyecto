
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header>
            
           <nav className="navbar bg-titulo">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Androbots</a>
            <a className="categoria1-brand" href="#">Nuestras Tecnologías</a>
            <a className="categoria1-brand" href="#">Como comprar</a>
            <a className="categoria1-brand" href="#">Contactanos</a>
            
            
      
            <FaShoppingCart /></div>
</nav>
            </header>
       
    )
}

export default Navbar;