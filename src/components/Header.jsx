import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/etna-logo.png';
 import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import './Header.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";
import { connect } from 'react-redux';


function Header() {
    // eslint-disable-next-line
    const [user, loading, error] = useAuthState(auth);
    function handleSignOut (){
        console.log(user)
        logout();
    }

    return(       
        <header className="border-bottom mb-3">
       
            <div className="container-fluid container-min-max-width
                            d-flex justify-content-between align-items-center">
                <Link to="/" className="my-3">
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
                        ? <a href="/" className="logout h5" onClick={handleSignOut}>Logout</a> 
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

function mapStateToProps(state) {
    return {
        numberOfProducts: state.cart.products.length
    }
}

export default connect(mapStateToProps, null)(Header);