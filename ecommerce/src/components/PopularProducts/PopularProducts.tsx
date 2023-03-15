import { useEffect, useState } from "react"
import { getProducts } from "../../services/products"
import { Product } from "../../types/product"
import ProductCard from "./ProductCard"

const PopularProducts = () => {

    const [popularProducts, setpopularProducts] = useState([])

    useEffect(() => {
        getProducts(4).then(data => { setpopularProducts(data) });
    }, [])


    return (
        <div className="mt-24 "><p className=" align-center text-base md:text-xl lg:text-2xl font-extralight manrope-font text-center ">Shop our popular items now.</p>
            <div className="grid grid-cols-2 justify-items-center  lg:flex lg:flex-row gap-8 grow-0 justify-center items-center mt-12 ">{popularProducts ? popularProducts.map((product: Product) => <ProductCard key={product.id} product={product} />) : <> </>}</div></div>
    )
}

export default PopularProducts