import React, { useEffect, useState } from 'react';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import './Products.css'

const Products = () => {

    const catId = parseInt( useParams().id );
    // console.log(params)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    useEffect(()=>{
        window.scroll(0, 0)
    },[])

    return (
        <div className='products md:flex md:w-11/12 mx-auto justify-between'>
        <div className='left top-0 md:w-[20%] mx-auto space-y-2'>
            <div>
                <h1 className='text-xl font-semibold mb-2'>Product Categiries</h1>
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
                <h1 className='text-xl font-semibold mb-2'>Filter by Price</h1>
           <div>
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
           </div>
            </div>
            <div>
               <h2 className='text-xl font-semibold mb-2'>Sort by</h2>
               <div>
                <input type="radio" name="price" value="asc" id="asc" onChange={(e)=> setSort('asc')}/>
                <label htmlFor="asc">Price (Lowest first)</label>
               </div>
               <div>
                <input type="radio" name="price" value='desc' id="desc" onChange={(e)=> setSort('desc')}/>
                <label htmlFor="desc">Price (Highest first)</label>
               </div>
            </div>
        </div>
        <div className='right w-[100%]'>
            <img className='h-[250px] w-full object-cover' src="https://i.ibb.co/YZHLVkB/pexels-natalie-bond-3759660-1.jpg" alt="" />
            <div>
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
        </div>
    );
};

export default Products;