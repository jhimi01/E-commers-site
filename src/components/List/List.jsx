import React from 'react';
import useProducts from '../../hooks/useProducts';
import Card from '../Card/Card';

const List = () => {
    const { products } = useProducts();
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 my-7'>
            {products?.map(product => <Card item={product} key={product.id}></Card>)}
        </div>
    );
};

export default List;