import { cn } from "@/lib/utils";
import OneProductForm from "./OneProductForm";
import OneProductRates from "./OneProductRates";

export default function OneProductRatesSection({rate, ratesNumber}: {rate: number, ratesNumber: number}) {
    return (
    <div className={cn("container",
        "grid mobile:grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop",
        "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop",
        "mb-20"
    )}>
        <OneProductForm rate={rate} ratesNumber={ratesNumber}/>
        <OneProductRates/>
    </div>
    )
}