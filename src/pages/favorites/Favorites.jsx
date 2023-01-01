import React from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';
import ProductItem from "../../components/ProductItem"



function Favorites(props) {

    return(
        <Layout>
            <div id="favorites-page" className="container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
               {
                    props.products.length
                    ? <div className="row mb-4">
                            {
                                props.products.map((product) => {    
                                    return <ProductItem 
                                            {...product}
                                            key = {product.id}
                                        />            
                                })
                            }                               
                        </div> 
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse in cart!</p>
                        <Link to="/all"><button className="btn btn-outline-dark">Inapoi la pagina de produse</button></Link>
                    </div>
                }                             
            </div> 
        </Layout>
    );
}
//TODO:: refreshing the page or opening a new tab should not remove the content of the cart -> cookies


function mapStateToProps(state) {
    return {
        products: state.favorites.products
    };
}

export default connect(mapStateToProps, null)(Favorites);