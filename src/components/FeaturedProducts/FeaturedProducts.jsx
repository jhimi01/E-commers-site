import Card from '../Card/Card';
import useProducts from '../../hooks/useProducts';
import { useEffect, useState } from 'react';
import axios from "axios";

const FeaturedProducts = ({type}) => {
    const { products, isLoading } = useProducts();
    // console.log("products", products)

    // const [products, setProducts] = useState([])
    // console.log(REACT_APP_URL)

//     useEffect(()=>{
//         const fetchData = async () => {
//         try{
//     const data =  await axios.get(process.env.REACT_APP_URL+"/products"
//     ,{
//       headers: {
//         Authorization: 'bearer ' + process.env.REAT_APP_API_TOKEN,
//       }
//     })
//     console.log(data)
//         }catch(err){
//             console.log(err)
//         }
//     }
//     fetchData()
// },[])
      if (isLoading) {
        return <div>Loading...</div>;
      }

    return (
        <div className='my-20 space-y-10'>
        <div className='md:flex justify-between items-center'>
        <h1 className='capitalize text-3xl font-medium'>{type} Products</h1>
         <p className='md:w-[70%] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus non alias dolore, quas quasi consequuntur, laborum voluptatum, voluptatibus placeat nam magnam totam porro minima. Repellat numquam impedit dignissimos, quis assumenda error enim mollitia necessitatibus, reiciendis aspernatur rem culpa doloremque, consequuntur illo ipsa perferendis labore neque hic sed nulla? Porro, esse?</p>
        </div>
        <div className='md:flex w-full justify-between gap-5'>
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