import React, { useEffect, useState } from 'react';
import { BsFillCartFill, BsHeart } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Product = () => {
 const { id } = useParams()
//  console.log(id)

 const {products} = useProducts();
//  console.log(products)
 const product = products.filter(product => product.id == id)
 console.log(product)
//  useEffect(()=>{
//    window.scroll(0, 0)
// },[])
    const [selectedImage, setSelectedImage] = useState([0])
   //  let [quantity, setQuantity] = useState(1)
   
  const [quantity, setQuantity] = useState(() => {
   // Get the stored quantity from localStorage for the current product
   const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
   const productIncart = existingCartItems.find((item) => item.id === product[0]?.id);
   return productIncart ? productIncart.quantity : 1;
 });
    console.log(quantity)
    const imges = [
      product[0]?.img,
      product[0]?.img2
    ]


    const handleAddcart = () => {
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      const productIncartIndex = existingCartItems.findIndex((item) => item.id === product[0]?.id);
  
      if (productIncartIndex !== -1) {
        existingCartItems[productIncartIndex].quantity = quantity; // Update the quantity in localStorage
      } else {
        existingCartItems.push({ ...product[0], quantity: quantity });
      }
  
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
  
      alert('Added product');
    };
  
    



    return (
        <div className='md:flex justify-between gap-10  w-11/12 mx-auto mt-5'>
           <div className="left flex md:w-1/2 gap-5">
            <div className="images md:w-[30%] space-y-3">
            <img className='h-[100px] w-full object-cover' src={imges[0]} alt="" onClick={e=>setSelectedImage(0)}/>
            <img className='h-[100px] w-full object-cover' src={imges[1]} alt="" onClick={e=>setSelectedImage(1)}/>
            </div>
            <div className="mainImage  md:w-[100%] h-[70vh] ">
                <img className='h-full w-full object-cover' src={imges[selectedImage]} alt="" />
            </div>
           </div>
           <div className="right md:w-1/2">
<h1 className='text-2xl font-semibold'>{product[0]?.clothesName}</h1>
<h3 className='text-xl text-blue-500 my-3'>$ {product[0]?.price}</h3>
<p>{product[0]?.description}</p>
 <div className='quality flex items-center gap-3 my-4'>
<button className='px-3 py-1 text-2xl bg-slate-200' onClick={()=> setQuantity((prev)=> prev === 1 ? 1 : prev - 1)}>-</button>
<span>{quantity}</span>
<button className='px-3 py-1 text-2xl bg-slate-200' onClick={()=> setQuantity((prev)=> prev + 1)}>+</button>
 </div>
 {/* add to lcoalhost */}
 <button onClick={handleAddcart} className="add flex uppercase  items-center gap-2 bg-blue-400 py-2 px-7 text-white font-normal">
    Add To Cart <BsFillCartFill />
 </button>
 <div className='flex items-center gap-5 my-4 uppercase'>
    <button className='flex items-center gap-1 text-blue-400 bg-base-200 py-1 px-3'>Add To WishList <BsHeart /></button>
    <button className='flex items-center gap-1 text-blue-400 bg-base-200 py-1 px-3'>Add To Compare <FaBalanceScale /> </button>
 </div>
 <div className="info flex flex-col mb-5">
    <span className='text-sm font-normal'>Vendor: Polo</span>
    <span className='text-sm font-normal'>Product Type: {product[0]?.clothesName}</span>
    <span className='text-sm font-normal'>Tag: T-shirt, Women, Top</span>
 </div>
 <hr />
 <div className="info flex flex-col my-3 w-1/2">
    <span className='py-1 text-sm font-normal'>DESCRIPTION</span>
    <hr />
    <span className='py-1 text-sm font-normal'>ADDITIONAL INFORMATION</span>
    <hr />
    <span className='py-1 text-sm font-normal'>FAQ</span>
 </div>
           </div>
        </div>
    );
};

export default Product;