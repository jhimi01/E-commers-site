import Card from '../Card/Card';
import useProducts from '../../hooks/useProducts';

const FeaturedProducts = ({type}) => {
    const { products } = useProducts();
    console.log("products", products)


    return (
        <div className='my-20 space-y-10'>
        <div className='flex justify-between'>
        <h1 className='capitalize text-3xl font-medium'>{type} Products</h1>
         <p className='w-[70%] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non alias dolore, quas quasi consequuntur, laborum voluptatum, voluptatibus placeat nam magnam totam porro minima. Repellat numquam impedit dignissimos, quis assumenda error enim mollitia necessitatibus, reiciendis aspernatur rem culpa doloremque, consequuntur illo ipsa perferendis labore neque hic sed nulla? Porro, esse?</p>
        </div>
        <div className='flex w-full justify-between gap-5'>
         {
            products.slice(0, 4).map(item => (
                <Card item={item} key={item.id}></Card>
            ))
         }
        </div>
        </div>
    );
};

export default FeaturedProducts;