import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'
import ProductsListWithFilter from '../components/ProductsListWithFilter';
import { useParams } from "react-router-dom";
import { Resource } from 'react-admin';


/**
 * I already know how to convert a class into a function so I will use the withRouter solution to inject the params
 * this is because in react-router-dom v6 the Route components no longer have route props (history, location, and match)
 */
 const withRouter = ViewAllProducts => props => {
    const params = useParams();
 
    return (
      <ViewAllProducts
        {...props}
        params={params}
      />
    );
  };

class ViewAllProducts extends Component {

   constructor() {
        super();
        this.state = {
            categories: [],
            content: []
        }
    }

    componentDidMount() {     
        const categoriesArr = Object.keys(products) ;
        const valuesArr = Object.values(products)
        this.setState({categories : categoriesArr, content : valuesArr});

    }

   render(){
      return(

        <div>
            {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
            <Layout>
            <div id = "productList" className="container-fluid container-min-max-width">
                {/* <ProductsListWithFilter {...this.state} /> */}
                    <Resource name="products" list={<ProductsListWithFilter {...this.state} />} />
                </div>
            </Layout>
        </div>
    );
   }
}

export default withRouter(ViewAllProducts);