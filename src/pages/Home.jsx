import React from 'react';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import HomeCategory from '../components/HomeCategory';

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
                <div className="container-fluid container-min-max-width">
                    {/* row vine la pachet cu col-6. Vezi grid-ul bootstrap pentru detalii! */}
                    <div className="row">
                        {/* Pentru fiecare categorie, cream o componenta HomeCategory */}
                        {this.state.categories.map((category, index) =>
                            <HomeCategory
                                key={index}
                                // ATENTIE! Atunci cand proprietatea unui obiect este tinuta intr-o variabila, ea
                                // trebuie accesata cu sintaxa: obiect[variabila]. products[category] e echivalentul
                                // lui products.shoes, in ecemplus de mai jos.
                                route={category}
                                name={products[category].name}
                                description={products[category].description}
                                image={products[category].image}
                            />
                        )}
                    </div>
                </div>
                </Layout>
            </div>
        );
    }
}

export default Home;