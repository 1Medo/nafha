import { cn } from "../../lib/utils";
import products from "../../constants/products";
import ProductCard from "./ProductCard";
type AllProductsList = {
    isList: boolean;
}

export default function AllProductsList({isList}: AllProductsList) {
    return (
        <>
        <div className={cn("all-products-list",
            "grid desktop:grid-cols-9 tablet:grid-cols-8 mobile:grid-cols-4",
            "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop",
            "desktop:overflow-y-scroll desktop:h-[756px] desktop:pl-2"
        )}>
            {
                products.map((product) =>
                    <ProductCard key={product.id} {...product} big={isList} id={product.id} 
                                className={isList ? 
                                "col-span-full"
                                :"desktop:col-span-3 tablet:col-span-4 mobile:col-span-4"
                            } />
                )
            }
        <p className="col-span-full text-center">لا توجد منتجات أخرى لعرضها</p>
        </div>
            </>
    )
}