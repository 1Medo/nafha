import { cn } from "@/lib/utils";
import SectionBar from "./SectionBar";
import products from "@/constants/products";
import ProductCard from "./ProductCard";

export default function LatestProductsSection() {
    const latestProducts = products.slice(0, 4).map((product) => 
        <ProductCard key={product.id} {...product} isNew={true} className={cn("desktop:col-span-3 tablet:col-span-4 mobile:col-span-4")}/>
    )
    return (
        <div id="newComes" className={cn("latest-products-section",
            "mb-20"
        )}>
            <SectionBar title="أحدث المنتجات" desc="تسوق أحدث المنتجات المضافة المميزة"/>
            <div className={cn("container",
        "grid mobile:grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop",
        "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop"
    )}>
                {latestProducts}
            </div>
        </div>
    )
}