import React from 'react';
import {Link} from 'react-router-dom';
import Layout from '../../components/Layout';
import products from '../../utils/products.json';
import "./Home.css";

class Home extends React.Component{

    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {        
        const categories = Object.keys(products);      
        this.setState({categories});
    }

    render(){
        return(
            <div>
                {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
                <Layout>
                <div id="home-menu" className="container-fluid container-min-max-width">
                    {/* row vine la pachet cu col-6. Vezi grid-ul bootstrap pentru detalii! */}
                    <div className="row">
                        <Link to={`/categories`}>
                            <div className="w-100">
                                <img src="https://imgpile.com/images/b3FKDM.jpg" alt="categories" className="w-100"/>
                            </div>
                            <h2 className="h4 my-1"><strong>Categories</strong></h2>                
                        </Link>

                        <Link to={`/all`}>
                            <div className="w-100">
                                <img src="https://imgpile.com/images/b3Ftjk.jpg" alt="all" className="w-100"/>
                            </div>
                            <h2 className="h4 my-1"><strong>All Our Courses</strong></h2>                
                        </Link>
                        
                    </div>
                </div>
                </Layout>
            </div>
        );
    }
}

export default Home;