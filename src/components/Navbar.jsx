import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    return (
        <header>
            
           <nav className="navbar bg-titulo">
            <div className="container-fluid">
            <a className="navbar-brand" href="/androbots-proyecto/">Androbots</a>
            <a className="categoria1-brand" href="/androbots-proyecto/category/robots">Robots</a>
            <a className="categoria1-brand" href="/androbots-proyecto/category/androides">Androides</a>
            <a className="categoria1-brand" href="/androbots-proyecto/category/ciborgs">Cyborgs</a>
               
            <FaShoppingCart /></div>
        </nav>
            </header>
       
    )
}

export default Navbar;