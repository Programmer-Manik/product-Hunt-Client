import { getProduct } from "@/network/lib/product"
import { useQuery } from "@tanstack/react-query"
 
export const useProducts = (query:string)=>{
const productData = useQuery({
    queryKey:["product",{allProduct:query}],
    queryFn:()=>getProduct(query),
    // staleTime:1000 * 5,
    // // gcTime: 1000
})
return productData
}