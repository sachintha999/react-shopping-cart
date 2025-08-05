

import { useEffect, useState } from "react";
import { createContext } from "react";  

export const shoppingCartContext = createContext(null);

function shoppingCartProvider({children}){

    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);

    async function fetchListOfProducts(){

        const apiResponse = await fetch('https://dummyjson.com/products');
        const result = await apiResponse.json();
        
        if(result && result?.products)

            setListOfProducts(result?.products);
            setLoading(false);

    }


    useEffect(() => {
        fetchListOfProducts()
    },[])

    console.log(listOfProducts);

    return <shoppingCartContext.Provider value={{listOfProducts, loading}}>{children}</shoppingCartContext.Provider>

}

export default shoppingCartProvider;
