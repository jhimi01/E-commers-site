import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { BsCashCoin, BsTrashFill } from 'react-icons/bs';
import './Cart.css'

const Cart = () => {

    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);

    const handleRemoveItem = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <div className='h-[75vh] cart overflow-y-scroll overflow-x-hidden'>
           <div className='bg-base-200 px-3 py-2 rounded mb-4'>
           <h2 className='text-xl font-bold'>Products in your cart</h2>
          <span className="text-info">Subtotal: $999</span>
                    
           </div>
            <div>
                {cartItems.map(product => (
                    <div key={product.id} className='mb-3'>
                        <img className='h-[200px] w-full object-cover' src={product?.img} alt="item" />
                        <div className='flex items-center gap-3 justify-between'>
                        <div className='w-5/6'>
                            <h1 className='font-semibold text-lg'>{product?.clothesName}</h1>
                            <p className='text-lg'>Price: <span className='text-blue-500'>1 x ${product.price} </span></p>
                            <p className='text-sm text-gray-500'>{product?.description?.substring(0, 100)}</p>
                        </div>
                    <div className='px-4'>
                    <button onClick={()=>handleRemoveItem(product.id)}><BsTrashFill className='text-2xl'/></button>
                    </div>
                        </div>
                    {/* delete icon */}
                    <p className='text-secondary underline my-1'>reset</p>
                    <button className='bg-secondary justify-center gap-3 flex items-center py-1 px-3 text-white w-full'>PRCCED TO CHECKOUT <BsCashCoin className='text-xl'/></button>
                    </div>
                    ))}
                   
            </div>
        </div>
    );
};

export default Cart;