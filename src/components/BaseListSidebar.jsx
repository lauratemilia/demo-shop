import React from 'react'
import products from "./../utils/products.json"

function BaseListSidebar(props) {

        const categoriesArr = Object.keys(products) ;
        const valuesArr = Object.values(products)
        const selectedCateg = [];
        const selectedItems = [];

    //console.log(props.content)
    const getPriceArray = () => {
        const priceArr = []
        valuesArr.map((object, index) => {
                return object.items.map((item, index) => {
                        return priceArr.push(item.price)
                })      
        })

        const priceSet = [...new Set(priceArr)]

        const max = Math.max(...priceSet)
        const firstSegment = Math.ceil(max/3)
        const secSegment = Math.ceil(max/3)*2

        return [firstSegment, secSegment, max];
    }

    const filterByCategory = (e, category, handler) => {
        if(e.target.checked){
                console.log(e.target.checked + " " + category)   
                selectedCateg.push(category);
        }
        else {
          console.log(e.target.checked + " " + category)
          selectedCateg.pop(category);                    
         }         
    }

    const getItemsForSelectedCateg = (handler) => {
        Object.keys(products).map((key, i) => {
                if(selectedCateg.includes(key)  )    {
                        selectedItems.push(products[key])
                }
        })    
        
        handler(selectedItems)

        console.log("getItemsForSelectedCateg: " + selectedItems)
    }


    return(
        <div className="row mb-4">
            <h4>Filter by:</h4>
           <div id="category" className="filter-type"><span>Category</span>
           {
                        categoriesArr.map((category, index) => {
                                
                            return <div key = {index}>
                                    <label htmlFor="category">{category}</label>
                                    <input type="checkbox" name={category} id = {category} value = {category} onChange = {(e) => filterByCategory(e, category)} />
                             </div> 
                        })
                    }    
           <button onClick = {() => getItemsForSelectedCateg(props.handler)}>Apply</button>               
           </div>
             
           <div id="price-checkbox" className="filter-type"><span>Price</span>
           {    
                getPriceArray().map((value, index) => {
                        return <div key = {index}>
                                 <label htmlFor="price">{index === 0 ? "0" : getPriceArray()[index -1] + " - " + value}</label>
                                 <input type="checkbox" name={value}/>
                        </div>
                })
           }                   
            </div>
            {/* <div id="skill" className="filter-type"><span>Skill</span>
                    <label htmlFor="skill"></label>
                    <input type="checkbox" name="skill"/>
            </div> */}
        </div>
);
}

export default BaseListSidebar