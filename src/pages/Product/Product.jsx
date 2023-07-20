import React, { useState } from 'react';
import { BsFillCartFill, BsHeart } from 'react-icons/bs';
import { FaBalanceScale } from 'react-icons/fa';

const Product = () => {

    const [selectedImage, setSelectedImage] = useState([0])
    let [quantity, setQuantity] = useState(1)
    
    const imges = [
        "https://i.ibb.co/tCnwMJp/pexels-valeria-ushakova-3094215.jpg",
        "https://i.ibb.co/YZHLVkB/pexels-natalie-bond-3759660-1.jpg"
    ]
    return (
        <div className='flex justify-between gap-10  w-11/12 mx-auto mt-5'>
           <div className="left flex w-1/2 gap-5">
            <div className="images md:w-[30%] space-y-3">
            <img className='h-[100px] w-full object-cover' src={imges[0]} alt="" onClick={e=>setSelectedImage(0)}/>
            <img className='h-[100px] w-full object-cover' src={imges[1]} alt="" onClick={e=>setSelectedImage(1)}/>
            </div>
            <div className="mainImage  md:w-[100%] h-[70vh] ">
                <img className='h-full w-full object-cover' src={imges[selectedImage]} alt="" />
            </div>
           </div>
           <div className="right w-1/2">
<h1 className='text-2xl font-semibold'>Clothes Name</h1>
<h3 className='text-xl text-blue-500 my-3'>$ 50.20</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam similique cum a architecto aspernatur, illum nulla nemo veniam repellendus!</p>
 <div className='quality flex items-center gap-3 my-4'>
<button className='px-3 py-1 text-2xl bg-slate-200' onClick={()=> setQuantity((prev)=> prev === 1 ? 1 : prev - 1)}>-</button>
<span>{quantity}</span>
<button className='px-3 py-1 text-2xl bg-slate-200' onClick={()=> setQuantity((prev)=> prev + 1)}>+</button>
 </div>
 <button className="add flex  items-center gap-2 bg-blue-400 py-2 px-7 text-white font-normal">
    Add To Cart <BsFillCartFill />
 </button>
 <div className='flex items-center gap-5 my-4'>
    <button className='flex items-center gap-1 text-blue-400 bg-base-200 py-1 px-3'>Add To WishList <BsHeart /></button>
    <button className='flex items-center gap-1 text-blue-400 bg-base-200 py-1 px-3'>Add To Compare <FaBalanceScale /> </button>
 </div>
           </div>
        </div>
    );
};

export default Product;