import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Button from "./atoms/Button";
import { LiaCartPlusSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";




type ProductCardTypes = {
    big?: boolean;
    brand: string;
    perfumeName: string;
    price: number;
    isNew?: boolean;
    rate: number;
    desc: string;
    oldPrice?: number;
    className?: string;
    id:number;
    images: string[];
}

export default function ProductCard({big = false, brand, perfumeName, price, isNew = false, rate, oldPrice, desc, className, id, images}: ProductCardTypes) {
    return (
        <Link href={`/products/${id}`} className={cn("product-card",
            "bg-Background-bg-tertiary border border-Background-border-color rounded-lg pb-8",
            "flex flex-col items-center justify-between relative gap-4",
            big && "items-center flex-row justify-evenly gap-4 pb-0 pr-0 pl-12",
            className
        )}>
            
            {isNew && <div className={cn("new",
            "absolute left-4 top-4 text-small font-bold [color:var(--Text-text-inverse)] bg-Background-bg-inverse px-3 rounded-2xl z-40"
            )}>
                جديد
            </div>}


                        <div className={cn("img-container relative w-full h-[200px] bg-white p-3 rounded-lg shadow-sm",
                        "tablet:h-[220px] mobile:h-[240px]",
                        big && "h-full w-2/4 tablet:h-full mobile:h-full"
                        )}>
                            <Image src={`/assets/products/${images[0]}`} alt="صورة المنتج" fill sizes="auto" className="object-contain py-5 "/>
                        </div>

                    <div className={cn("flex flex-col items-center justify-between gap-4 px-6 tablet:px-4",
                            big && " flex-col justify-center w-full items-start py-8")
                        }>

                        <div className={cn("product-identity",
                            "text-body ")}>
                                {big && <div className={cn("product-brand",
                            "text-buttonText [color:var(--Text-text-muted)]")}>
                                {brand}
                                </div>}
                                
                            <div className={cn("product-name",
                                "text-body flex justify-start min-h-8",
                                big && "text-subtitle font-medium" )}>
                                {perfumeName}
                            </div>

                            {big && <div className={cn("product-desc",
                                 "text-medium font-medium mt-3 [color:var(--Text-text-secondary)]")}>
                                {desc}
                            </div>}


                        </div>

                <div className={cn("bottom gap-3",
                    "w-full flex flex-col"
                )}>

                    <div className={cn("product-second-info",
                        "flex justify-between items-center w-full",
                        big && "flex-row items-start gap-2"
                    )}>
                        <div className={cn("price-box",
                            "flex justify-center gap-2 items-end",
                            big && "order-2"
                        )}> 
                            <div className={cn("price",
                                "text-h5",
                                big && "text-h4"
                            )}>{price} ريال</div>
                            <div className={cn("old-price",
                                "line-through [color:var(--Text-text-muted)] text-large",
                                big && "text-h5"
                            )}>{oldPrice} ريال</div>
                        </div>

                        <div className={cn("rate",
                            "flex items-center justify-center gap-1"
                        )}>
                            <span className={cn(big && "order-2 text-muted")}>{rate}</span>
                            {big ? 
                                <div className="stars-box -scale-x-100">
                                    <ReactStars
                                        count={5}
                                        value={rate}
                                        size={16}
                                        isHalf={true}
                                        edit={false}
                                        emptyIcon={<IoIosStar />}
                                        halfIcon={<IoIosStarHalf />}
                                        filledIcon={<IoIosStar />}
                                        color="#DADACA"
                                        activeColor="#FA9338"
                                        />
                                </div>
                            : <IoIosStar className="mb-[1px]" color="#FA9338"/>}
                        </div>
                    </div>
                    <div className={cn("buttons",
                        "w-full flex flex-nowrap gap-2"
                    )}>
                    <Button size="full" trailingIcon={<LiaCartPlusSolid size={20}/>}
                    onClick={
                        (e) => {
                            e.preventDefault();
                            e.stopPropagation()
                        }
                    }
                    >اضف الي العربة</Button>
                    <Button variant="secondary" iconOnly={<CiHeart size={12}/>} className={cn("w-10 h-10 top-2 right-4 p-2",
                        big ? "min-w-12 h-12": "absolute",
                        
                    )}
                                        onClick={
                        (e) => {
                            e.preventDefault();
                            e.stopPropagation()
                        }
                    }></Button>
                    </div>
                </div>
            </div>

        </Link>
    )
}