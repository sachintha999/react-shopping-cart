import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shoppingCartContext } from "../../context";




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
       <div>
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadox-sm p-6" >
                <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

                    <div className="px-4 py-10 rounded-xl shadow-lg relative">

                        <img
                        className="w-4/5 rounded object-cover"
                        src={productDetails?.thumbnail}
                        alt={productDetails?.title}
                        />

                    </div>

                </div>

            </div>


        </div>

       </div>
    )
}

export default productDetails