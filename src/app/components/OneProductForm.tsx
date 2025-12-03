"use client";

import { cn } from "@/lib/utils";
import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Input from "./atoms/Input";
import Button from "./atoms/Button";


export default function OneProductForm({rate, ratesNumber}: {rate: number, ratesNumber: number}) {

    return(
    <div className={cn("rating",
        "desktop:col-span-4 tablet:col-span-full mobile:col-span-full",
        "flex flex-col gap-4"
    )}>
        <div className={cn("rates",
            "flex flex-col justify-center items-center py-6 gap-3 rounded-lg border border-Background-border-color bg-Background-bg-tertiary"
        )}>
            <div className="text-h5">{rate} من 5.0</div>
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
            <div className="text-muted">{ratesNumber} من التقييمات علي المنتج</div>
        </div>
        <div className="form flex flex-col gap-2">
                <Input variant="textarea" width="w-full" placeholder="برجاء إضافة تعليقك" label="اكتب تقييمك علي المنتج:"/>
            <Button className="w-full">نشر تعليقك</Button>
        </div>
    </div>
    )
}