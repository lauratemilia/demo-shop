import React from 'react'

function BaseListSidebar(props) {

    //console.log(props.content)
    const getPriceArray = () => {
        const priceArr = []
        props.content.map((object, index) => {
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
    return(
        <div className="row mb-4">
            <h4>Filter by:</h4>
           <div id="category" className="filter-type"><span>Category</span>
           {
                        props.categories.map((category, index) => {
                                
                            return <div key = {index}>
                                    <label htmlFor="category">{category}</label>
                                    <input type="checkbox" name={category} />
                             </div>  
                        })
                    }          
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
            <div id="skill" className="filter-type"><span>Skill</span>
                    <label htmlFor="skill"></label>
                    <input type="checkbox" name="skill"/>
            </div>
        </div>
);
}

export default BaseListSidebar