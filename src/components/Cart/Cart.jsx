import React from 'react';
import useProducts from '../../hooks/useProducts';
import { BsCashCoin, BsTrashFill } from 'react-icons/bs';

const Cart = () => {

    const { products } = useProducts()
    const data = [
        {
            "id": 3,
            "img": "https://i.ibb.co/19Xf9f1/pexels-ali-karimiboroujeni-17478031.jpg",
            "img2": "https://i.ibb.co/1XgzL1q/pexels-ali-karimiboroujeni-17478035.jpg",
            "clothesName": "Dress",
            "isNew": true,
            "oldPrice": 19.99,
            "price": 14.99,
            "description": "Elegant and versatile dress suitable for various occasions. Features a flattering fit and stylish design. Made from lightweight and breathable fabric, ensuring all-day comfort."
          },
          {
            "id": 4,
            "img": "https://i.ibb.co/gvR30mp/pexels-vitaly-gorbachev-17035518.jpg",
            "img2": "https://i.ibb.co/X3rctbB/pexels-vitaly-gorbachev-17035522.jpg",
            "clothesName": "Shirt",
            "isNew": false,
            "oldPrice": 39.99,
            "price": 29.99,
            "description": "Classic and timeless shirt suitable for both formal and casual occasions. Crafted from high-quality fabric with attention to detail. A wardrobe essential for every fashion-conscious individual."
          }]

    return (
        <div className='h-full overflow-auto'>
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
                    <button><BsTrashFill className='text-2xl'/></button>
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