"use client";

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState } from "react"
import Button from "./atoms/Button";
import { CiHeart } from "react-icons/ci";



export default function ProductImages({images} : {images: string[]}) {
    const [mainImage, setMainImage] = useState(images[0])

    return (
        <div className={cn("images-box",
            "flex flex-row-reverse w-fit gap-4",
            "tablet:flex-col tablet:justify-center tablet:w-full tablet:items-center",
            "mobile:flex-col mobile:justify-center mobile:w-full mobile:items-center"
        )}>
        <div className={cn("main-image",
            "relative w-[360px] h-[400px] border border-Background-border-color rounded-lg bg-white p-2",
            "tablet:w-full tablet:h-[520px]",
            "mobile:w-full mobile:h-[520px]"
        )}>
            <div className={cn("w-full h-full relative")}>

            <Image src={`/assets/products/${mainImage}`} alt={`main image`} 
                    fill
                    sizes="auto"
                    unoptimized
                    className={cn("object-contain", 
                    )}
                    />
                    </div>
                    <Button variant="secondary" iconOnly={<CiHeart size={12}/>} className={cn("absolute w-10 h-10 top-2 left-4 p-2 z-10",
                        
                    )
                    }/>
        </div>

        <div className={cn("thumb-images",
            "flex flex-col justify-between gap-6",
            "tablet:flex-row tablet:justify-between tablet:w-full",
            "mobile:flex-row mobile:justify-between mobile:w-full"
        )}>
            {
                images.map((img, i) =>
                    <div key={i} className={cn("w-24 basis-full relative border border-Background-border-color rounded-lg transition-opacity",
                        "tablet:h-32 mobile:h-24",
                        mainImage !== img && "opacity-50"
                    )}>
                        <Image src={`/assets/products/${img}`} alt="thumbnail image" fill sizes="auto"
                            onClick={() => setMainImage(img)}
                            className={cn("object-cover cursor-pointer")}
                            />
                    </div>
            )
            }
        </div>
        </div>
    )
}