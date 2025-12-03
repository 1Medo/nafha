"use client";

import { cn } from "@/lib/utils";
import ProductImages from "./ProductImages";
import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import OptionGroup from "./atoms/OptionGroup";
import Button from "./atoms/Button";
import { useState } from "react";
import { LuPlus, LuMinus } from "react-icons/lu";
import { LiaCartPlusSolid, LiaShoppingCartSolid } from "react-icons/lia";


export default function OneProductInfo({product}: {product: {
    id: number;
    brand: string;
    perfumeName: string;
    price: number;
    oldPrice: number;
    desc: string;
    rate: number;
    ratesNumber: number;
    sizes: number[];
    images: string[];
}}) {

  const [count, setCount] = useState(1)
  const price = product.price * count
const oldPrice = product.oldPrice * count

    return (
        <div className={cn("container",
      "flex gap-10",
      "tablet:flex-col",
      "mobile:flex-col",
      "mb-20"
    )}>
        <ProductImages images={product.images}/>
      <div className={cn("content",
        "flex flex-col justify-between py-3",
      )}>

        <div className={cn("info",
          "flex flex-col gap-4"
        )}>
          <div className="product-main-info">
            <div className="text-buttonText text-muted">{product.brand}</div>
            <div className="text-h4">{product.perfumeName}</div>
          </div>
          <p className="text-body">{product.desc}</p>
        </div>
        <div className={cn("middle",
          "flex flex-col gap-4",
        )}>

          <div className={cn("rate",
            "flex items-center gap-2"
          )}>
            <div className="stars-box -scale-x-100">
                <ReactStars
                    count={5}
                    value={product.rate}
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
            <span className="text-medium text-muted">( {product.ratesNumber} تقييمات )</span>
          </div>

          <div className={cn("size", 
            "flex gap-2 items-center",
            "mobile:flex-col mobile:items-start mobile:mb-8",
            "mobile:flex-col mobile:items-start tablet:mb-4"
          )}>
            <div className="text-h5">اختر حجم العبوة:</div>
            <OptionGroup options={product.sizes}/>
          </div>
        </div>


        <div className={cn("buttom",
          "flex flex-col gap-4",
          "tablet:gap-6 mobile:gap-8"
        )}>
          <div className={cn("top-bottom",
            "flex justify-between items-end",
          )}>
            <div className={cn("counter",
              "flex gap-3 justify-center items-center",
            )}>
              <span>حدد الكمية</span>
              <Button variant="secondary" className="p-1 w-8 h-8" iconOnly={<LuPlus strokeWidth={1.3}/>} onClick={() => {
                setCount(prev => prev + 1)
              }}
              />
              <span className="text-h5 w-3 text-center">{count}</span>
              <Button variant="secondary" className="p-1 w-8 h-8" iconOnly={<LuMinus strokeWidth={1.3}/>} onClick={() => {
                setCount(prev => Math.max(1, prev - 1))
              }}
                />
            </div>

            <div className={cn("price",
              "flex flex-col items-center"
            )}>
                    <div className={cn("old-price",
                        "line-through [color:var(--Text-text-muted)] text-h5",
                      )}>{oldPrice} ريال</div>
                      <div className={cn("price",
                        "text-h4"
                      )}>{price} ريال</div>
            </div>
          </div>
          <div className={cn("bottom-bottom",
            "flex gap-4",
            "mobile:flex-col"
          )}>
              <Button size="full" trailingIcon={<LiaCartPlusSolid size={20}/>}>شراء</Button>
              <Button variant="secondary" size="full" trailingIcon={<LiaShoppingCartSolid size={20}/>}>أضف إلى العربة</Button>
          </div>
        </div>
            </div>
    </div>
    )
}