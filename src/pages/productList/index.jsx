
import { useContext } from "react";
import { shoppingCartContext } from "../../context";
import ProductTile from "../../components/productTile";


function ProductList() {


    const {listOfProducts, loading} = useContext(shoppingCartContext);

    console.log(listOfProducts);

    if(loading) return <h1>Loading... please wait....</h1>

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">

            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

                <div className="max-w-md mx-auto text-center">

                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl ">Our Featured Products</h2>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {
                        listOfProducts && listOfProducts.length > 0 ?
                        listOfProducts.map(singleProductTile=> <ProductTile singleProductTile={singleProductTile} />):  <h3>No products found</h3>
                           
                    }
                </div>
            </div>


        </section>
    )
}

export default ProductList