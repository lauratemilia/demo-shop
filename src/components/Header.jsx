import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/etna-logo.png';
import { ReactComponent as ShoppingCart } from '../assets/icons/shopping-cart.svg';
import favoritesIcon from '../assets/icons/favorites.png';
import './Header.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../config/firebase";
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';


function Header(props) {

    const {numberOfProducts , numberOfFavorites} = props;
    const [favoritesCookies, setFavoritesCookie, removeFavoriteCookie] = useCookies(['favorites']);
    const [inCartCookies, setCartCookie, removeCartCookie] = useCookies(['inCart']);


    // eslint-disable-next-line
    const [user, loading, error] = useAuthState(auth);

    function handleSignOut (){
        logout();
    }

    function saveCookies(){
        setFavoritesCookie("favorites", props.favorites, {path: "/", expires : new Date(new Date().getTime() + 60 * 60 * 1000), secure: true })
        setCartCookie("inCart", props.inCart, {path: "/", expires : new Date(new Date().getTime() + 60 * 60 * 1000), secure: true })
        console.log(props.favorites)
    }

    return(             
        <header className="border-bottom mb-3" onLoad={() => {saveCookies()}}>
       
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

                    <Link to="/favorites" className="d-flex">
                        <img src={favoritesIcon} alt="favorites" className="ml-2" width = "28" height ="31"/>                        
                    </Link>
                    <p className="ml-1 mb-0">{ numberOfFavorites }</p>
                  
                    {/* ShoppingCart este un SVG! */}
                    <Link to="/cart" className="d-flex">
                        <ShoppingCart className="ml-2"/>                        
                    </Link>
                    <p className="ml-1 mb-0">{ numberOfProducts }</p>
                   </div>
                </div>
            </div>           
        </header>
    );
}


function mapStateToProps(state) {    
    let countCartProducts = 0
    state.cart.products.forEach(product => countCartProducts += product.quantity)
   
    return {
        numberOfProducts: countCartProducts,
        numberOfFavorites: state.favorites.products.length,
        favorites: state.favorites.products,
        inCart: state.cart.products
    }
}


export default connect(mapStateToProps, null)(Header);