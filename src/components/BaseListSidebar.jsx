import React from 'react'

function BaseListSidebar(props) {

    console.log(props.categories)
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
             
           <div id="price" className="filter-type"><span>Price</span>
                    <label htmlFor="price"></label>
                    <input type="checkbox" name="price"/>
            </div>
            <div id="skill" className="filter-type"><span>Skill</span>
                    <label htmlFor="skill"></label>
                    <input type="checkbox" name="skill"/>
            </div>
        </div>
);
}

export default BaseListSidebar