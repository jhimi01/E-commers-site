import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const FeaturedProducts = () => {
    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('feature.json').then(res => res.json().then(data => {
            setCards(data)
            console.log(data)
        }))
    },[])


    return (
        <div>
        <div className='flex justify-between'>
        <h1 className='capitalize text-3xl font-medium'>Features Products</h1>
         <p className='w-[70%] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non alias dolore, quas quasi consequuntur, laborum voluptatum, voluptatibus placeat nam magnam totam porro minima. Repellat numquam impedit dignissimos, quis assumenda error enim mollitia necessitatibus, reiciendis aspernatur rem culpa doloremque, consequuntur illo ipsa perferendis labore neque hic sed nulla? Porro, esse?</p>
        </div>
        <div className='flex justify-center gap-5'>
         {
            cards.slice(0, 4).map(item => (
                <Card item={item} key={item.id}></Card>
            ))
         }
        </div>
            
        </div>
    );
};

export default FeaturedProducts;