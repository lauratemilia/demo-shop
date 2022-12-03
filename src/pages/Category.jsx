import React, { Component } from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json'

class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            category: {}
        }
    }

    componentDidMount(){
         // Daca componenta a fost inclusa intr-o componenta de tip "Route"(vezi App.js)
        // => automat in this.props vin 3 atribute: history, location, match
        console.log(this.props);
        // In match gasim parametri rutei
        const { match } = this.props;
        const categoryName = match.params.categoryName;
       
        this.setState({ category: products[categoryName] });
    }

   render(){
    return(
        <div>
            {/* Tot ce este pus intre <Layout> si </Layout> va reprezenta props.children in cadrul componentei Layout.*/}
            <Layout>
            <div className="container-fluid container-min-max-width">
                    {/* Din categoria curenta, afisam numele */}
                    <h2>{ this.state.category.name }</h2>
                </div>
            </Layout>
        </div>
    );
   }
}

export default Category;