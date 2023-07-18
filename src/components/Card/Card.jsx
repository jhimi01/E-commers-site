import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    return (
       <Link to={`/product/${item.id}`}>
         <div className='md:w-[250px]'>
         <div className='w-full h-[300px] overflow-hidden relative group'>
         {item?.isNew && <span className="badge badge-primary badge-md absolute z-30 left-2 top-2">New</span>}
            <img className='w-full h-full object-cover z-10 absolute' src={item?.img} alt="mainimg" />
            <img className='transition group-hover:z-20 w-full h-full  object-cover absolute' src={item?.img2} alt="mainimg" />
         </div>
          <h1 className='font-semibold'> {item?.clothesName}</h1>
          <div className='text-sm'>
            <h3 className='text-gray-400'>old price: <span className='line-through'> ${item?.oldPrice}</span></h3>
            <h3>new price: ${item?.price}</h3>
          </div>
        </div>
       </Link>
    );
};

export default Card;