import React from 'react';
import Layout from '../../components/Layout';
import products from '../../utils/products.json';
import './Product.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Cart/cart_actions';
import { addToFavorites, removeFromFavorites } from '../../redux/Favorites/favorites_actions';
import { useParams } from "react-router-dom";


const withRouter = Product => props => {
    const params = useParams();
 
    return (
      <Product
        {...props}
        params={params}
      />
    );
  };

class Product extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {
            product: {},
        }
    }

    componentDidMount() {
        const productId = this.props.params.productId;
        const categoryValues = Object.values(products);
        const productItems = categoryValues.reduce((acc, category) => {
            return [
                ...acc,
                ...category.items
            ]
        }, []);
        const currentProduct = productItems.find(product => {
            return Number(productId) === product.id;
        });
        this.setState({product: currentProduct});
    }

    addToFavorites() {
        this.props.addToFavorites({
            product: this.state.product
        })
    }

    removeFromFavorites () {
        this.props.removeFromFavorites({
            product: this.state.product

        })
    }

    chechkIfIsFavorite() {
        const favorites = this.props.favorites;
        if(favorites.length > 0){
            favorites.forEach(item => {
                if(item.id === this.state.product.id){
                    document.querySelector(".addToFavorites span img").classList.add("add-to-favorites-active");
                }
            }) 
        }
        
    }

    toggleFavorites(event, id) {
        event.preventDefault();

        const isFavorite = event.target.classList.contains("add-to-favorites-active");
        if(isFavorite){
            document.querySelector(".addToFavorites span img").classList.remove("add-to-favorites-active");
            this.removeFromFavorites();
        } else {
            document.querySelector(".addToFavorites span img").classList.add("add-to-favorites-active");
            this.addToFavorites();
        }
    }

    

    render() {
        const { product} = this.state;

        return (
            <Layout>
                <div className="product-page container-fluid container-min-max-width" onLoad = {this.chechkIfIsFavorite.bind(this)}>
                    <h1 className="my-5 h2">{product.name}</h1>
                    <div className="product-info d-flex">
                        <div className="image-wrapper d-flex mr-5">
                            <img src={product.image} alt="Product presentation"/>
                        </div>
                        <div className="product-details">
                            <p className="h3 text-danger">{product.price} {product.currency}</p>
                            <button
                                className="btn btn-dark mb-4 font-weight-bold"
                                onClick={() => {
                                    this.props.addToCart({
                                        product: {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            currency: product.currency,
                                            image: product.image
                                        }
                                    })
                                }}
                            >
                                Adaugă în coș
                            </button>
                            <p><span className="font-weight-bold">OferredBy</span>: {product.offeredBy}</p>
                            <p><span className="font-weight-bold">Duration</span>: {product.duration}</p>
                            <p><span className="font-weight-bold">Skills</span>: {product.skills}</p>
                            <p className="font-weight-bold mb-1">Descriere:</p>
                            <p>{product.description}</p>
                            <button className="addToFavorites btn btn-outline-dark" 
                             onClick={(event) => {this.toggleFavorites(event, product.id)}}>
                             <span><img alt="" width="26" height="31"/></span>
                         </button>
                        </div>
                        
                    </div>
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return {
        favorites: state.favorites.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (payload) => dispatch(addToCart(payload)),
        addToFavorites: (payoad) => dispatch(addToFavorites(payoad)),
        removeFromFavorites: (payoad) => dispatch(removeFromFavorites(payoad)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));