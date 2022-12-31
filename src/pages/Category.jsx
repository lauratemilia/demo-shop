import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'
import ProductList from '../components/ProductList';
import { useParams } from "react-router-dom";


/**
 * I already know how to convert a class into a function so I will use the withRouter solution to inject the params
 * this is because in react-router-dom v6 the Route components no longer have route props (history, location, and match)
 */
 const withRouter = Category => props => {
    const params = useParams();
 
    return (
      <Category
        {...props}
        params={params}
      />
    );
  };

class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: {},
            items:[]
        }        
    }

    componentDidMount(){         
        const categoryName = this.props.params.categoryName;
       
        this.setState({ category: products[categoryName],
                        items:products[categoryName].items });
    }

   render(){
    return(
        <div>
            {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
            <Layout>
            <div id = "productList" className="container-fluid container-min-max-width">
                    <h2 className="mb-5">{ this.state.category.name }</h2>
                    <ProductList {...this.state} />
                </div>
            </Layout>
        </div>
    );
   }
}

export default withRouter(Category);