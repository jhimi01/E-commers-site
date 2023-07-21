import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { BsCashCoin, BsTrashFill } from 'react-icons/bs';
import './Cart.css'

const Cart = () => {

  const [cartItems, setCartItems] = useState([])

    const data = JSON.parse(localStorage.getItem('cartItems')) || []; // Parse the data from localStorage or use an empty array if data is not available

          console.log('darsdsafgfsdg',data)

           
        
            const handleRemoveItem = (itemId) => {
                const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
                const updatedCartItems = existingCartItems.filter(item => item.id !== itemId);
                localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
                setCartItems(updatedCartItems); // Update the state with the updated cart items
                alert('CartItems')
              };
        

    return (
        <div className='h-[100vh] cart overflow-y-scroll overflow-x-hidden'>
           <div className='bg-base-200 px-3 py-2 rounded mb-4'>
           <h2 className='text-xl font-bold'>Products in your cart</h2>
          <span className="text-info">Subtotal: $999</span>
                    
           </div>
            <div>
                {data.map(product => (
                    <div className='mb-3'>
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