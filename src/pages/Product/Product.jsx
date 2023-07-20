import React, { useState } from 'react';

const Product = () => {

    const [selectedImage, setSelectedImage] = useState([0])

    const imges = [
        "https://i.ibb.co/tCnwMJp/pexels-valeria-ushakova-3094215.jpg",
        "https://i.ibb.co/YZHLVkB/pexels-natalie-bond-3759660-1.jpg"
    ]
    return (
        <div>
           <div className="left">
            <div className="images">
            <img src={imges[0]} alt="" onClick={e=>setSelectedImage(0)}/>
            <img src={imges[1]} alt="" onClick={e=>setSelectedImage(1)}/>
            </div>
            <div className="mainImage">
                <img src={imges[selectedImage]} alt="" />
            </div>
           </div>
           <div className="right">

           </div>
        </div>
    );
};

export default Product;