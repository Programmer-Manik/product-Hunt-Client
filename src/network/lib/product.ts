
import axiosClient from "../apiClient.axios";

export function getProduct(query:string){
    if(query.length){
        return axiosClient.get(`products?${query}`);
    }
    return axiosClient.get("/products")
   
}

