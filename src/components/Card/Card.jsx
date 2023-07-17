import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
       <Link to={`/product/${item.id}`}>
         <div className='w-[200px]'>
         <div className='Image w-full h-[400px] overflow-hidden relative group'>
            <img className='mainImage w-full h-full object-cover z-10 absolute group-hover:scale-105' src={item?.img} alt="mainimg" />
            <img className='secondImage transition group-hover:z-20 w-full h-full  object-cover absolute' src={item?.img2} alt="mainimg" />
         </div>
          <h1> {item?.clothesName}</h1>
          <div>
            <h3>$ {item?.oldPrice}</h3>
            <h3>$ {item?.price}</h3>
          </div>
        </div>
       </Link>
    );
};

export default Card;