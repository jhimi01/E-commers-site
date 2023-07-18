import { useQuery } from "@tanstack/react-query";

const useProducts = ()=>{
  const { isLoading, data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () =>{
        const response = await fetch('../../public/feature.json')
        return response.json()
    }
    
  })
  return {products}
}

export default useProducts;