import React from 'react';
import useProducts from '../../hooks/useProducts';

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
        <div>
            <h2 className='text-xl font-normal'>Products in your cart</h2>
            <div>
                {data.map(product => (
                    <div>
                        <img className='h-[200px] w-full object-cover' src={product?.img} alt="item" />
                        <div>
                            <h1>{product?.clothesName}</h1>
                            <p>{product?.description?.substring(0, 100)}</p>
                            <p>Price: 1 x ${product.price} </p>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default Cart;