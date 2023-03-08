import { Product } from "../../types/product"
import cntl from "cntl";

type ProductCardProps = {
    product: Product
}


const responsiveParent = cntl`lg:h-[448px] lg:w-[280px] md:h-[335px] md:w-[210px] rounded-lg`;
const responsiveImg = cntl`lg:w-[280px] lg:h-[380px] md:w-[210px] md:h-[285px]`
const flexConfig = cntl`flex flex-col gap-y-4`

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div id="cardProduct" className={responsiveParent + flexConfig + "hover:scale-95 odd:hover:skew-y-1 even:hover:-skew-y-2 "}>
            <img alt={product.title} src={`http://localhost:3003${product.imageUrl}`} className={responsiveImg + " w-[157.5px] h-[213.75px] rounded-3xl"} ></img>
            <div className="manrope-font"><p className="text-black text-sm md:text-lg">{product.title}</p><p className="text-xs">USD {product.price}</p></div>
        </div>
    )
}

export default ProductCard