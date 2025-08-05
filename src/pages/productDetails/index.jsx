import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"




function productDetails() {
    const {id} = useParams();

    const {productDetails, setProductDetails} = useContext(shoppingCartContext);

    async function fetchProductDetails(){
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await apiResponse.json();

        
        if (result) setProductDetails(result);
    }

   useEffect(() => {

    fetchProductDetails()
       
   },[id]) 

   console.log(productDetails);

    return (
        <div>productDetails</div>
    )
}

export default productDetails