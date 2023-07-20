import React, { useState } from 'react';

const Product = () => {

    const [selectedImage, setSelectedImage] = useState([0])

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
           <div className="right w-1/2 space-y-1">
<h1 className='text-2xl font-semibold'>Clothes Name</h1>
<h3 className='text-xl text-blue-500'>$ 50.20</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam similique cum a architecto aspernatur, illum nulla nemo veniam repellendus!</p>

           </div>
        </div>
    );
};

export default Product;