import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"


const Navbar = () => {
    return (
        
        <header>
           <nav className="navbar bg-titulo">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/androbots-proyecto/">Androbots</Link>
            <Link className="categoria1-brand" to="/androbots-proyecto/category/robots">Robots</Link>
            <Link className="categoria1-brand" to="/androbots-proyecto/category/androides">Androides</Link>
            <Link className="categoria1-brand" to="/androbots-proyecto/category/ciborgs">Cyborgs</Link>
            <Link to="/androbots-proyecto/cart"><CartWidget /></Link>
            </div>
                </nav>     
                    </header>  
            )
        }

export default Navbar;