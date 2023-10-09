import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = ()=>{
  const { isLoading, data: products = [], refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () =>{
        const response = await axios.get('/public/feature.json'
        // ,{
        //   headers: {
        //     Authorization: 'bearer ' + process.env.REAT_APP_API_TOKEN,
        //   }
        // }
        )
        return response.data
    }
    
  })
  // console.log(products)
  return {products, isLoading, refetch}
}

export default useProducts;