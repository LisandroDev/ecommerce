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
        <div className="mt-14"><p className=" align-center text-base md:text-xl lg:text-2xl manrope-font text-center ">Popular items</p>
            <div className="flex flex-wrap flex-row md:flex-row lg:flex-row gap-8 grow-0 justify-center items-center mt-12 ">{popularProducts ? popularProducts.map((product: Product) => <ProductCard product={product} />) : <> </>}</div></div>
    )
}

export default PopularProducts