import React from 'react';

const Products = () => {
    return (
        <div className='products'>
        <div className='left'>
            <div>
                <h1>Product Categiries</h1>
                 <div>
                    <input type="checkbox" value={1} id="1" />
                    <label htmlFor="1">Shoes</label>
                 </div>
                 <div>
                    <input type="checkbox" value={2} id="2" />
                    <label htmlFor="2">Coats</label>
                 </div>
                 <div>
                    <input type="checkbox" value={3} id="3" />
                    <label htmlFor="3">Skirt</label>
                 </div>
            </div>
            <div>
                <h1>Filter by Price</h1>
           <div>
            <span>0</span>
            <input type="range" min={0} max={1000}/>
            <span>1000</span>
           </div>
            </div>
            <div>
               <h2>Sort by</h2>
               <div>
                <input type="radio" name="price" value="asc" id="asc" />
                <label htmlFor="asc">Price (Lowest first)</label>
               </div>
               <div>
                <input type="radio" name="price" value='desc' id="desc" />
                <label htmlFor="desc">Price (Highest first)</label>
               </div>
            </div>
        </div>
        <div className='right'></div>
        </div>
    );
};

export default Products;