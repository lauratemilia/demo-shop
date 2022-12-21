import React from 'react';
import {Link} from 'react-router-dom';
// Importam logo-ul.
import Logo from '../assets/images/etna-logo.png';
// SVG-urile se importa diferit de imagini! (Google: how to import SVG in React)
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";


function Header() {
    // eslint-disable-next-line
    const [user, loading, error] = useAuthState(auth);
    function handleSignOut (){
        console.log(user)
        logout();
    }

    return(       
        // Vrem ca headerul sa aiba un border sub el.
        <header className="border-bottom mb-3">
            {/* Continutul header-ului trebuie sa fie centrat si sa nu depaseasca dimensiunile
            minime si maxime(320px->1200px) => avem nevoie de clasele container-fluid container-min-max-width*/}
            {/* Celelalte 3 clase sunt clase de Bootstrap, echivalente propritatilor de flex. */}
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
                    {/* Utilizarea logo-ului */}
                    <img src={Logo} alt="etna" className="logo"/>
                </Link>
                <div>
                    { 
                    user
                        ? <p>Salut, {user.displayName}!</p>
                        : null
                    }
                   <div className="d-flex justify-content-end">
                    {
                        user 
                        ? <a className="logout h5" onClick={handleSignOut}>Logout</a> 
                        : <Link to="/login" className="h5">Login</Link>
                    }
                  
                    {/* ShoppingCart este un SVG! */}
                    <ShoppingCart className="ml-2"/>
                   </div>
                </div>
            </div>
        </header>
    );
}

export default Header