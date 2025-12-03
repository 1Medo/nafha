import { cn } from "@/lib/utils";
import SectionBar from "./SectionBar";
import products from "@/constants/products";
import ProductCard from "./ProductCard";

export default function MostSalesSection() {
    const latestProducts = products.slice(4, 8).map((product) => 
        <ProductCard key={product.id} {...product} className={cn("desktop:col-span-3 tablet:col-span-4 mobile:col-span-4")}/>
    )
    return (
        <div id="bestSales" className={cn("most-sales-section",
                        "mb-20"
        )}>
            <SectionBar title="الأكثر مبيعًا" desc="تسوق أحدث المنتجات المضافة المميزة"/>
            <div className={cn("container",
        "grid mobile:grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop",
        "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop"
    )}>
                {latestProducts}
            </div>
        </div>
    )
}