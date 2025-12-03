import { cn } from "@/lib/utils";
import Image from "next/image";

export default function BrandsBar() {
    return (
        <div className={cn("bar",
            "bg-Brand-secondary w-full h-16 desktop:h-24 "
        )}>
            <div className={cn("container",
                "h-full flex justify-evenly items-center")}>

                    <div className={cn("image-container",
                        "relative w-14 h-8 desktop:w-28 desktop:h-16")}>
                        <Image src={"/assets/brands/1.svg"}
                                alt="arabian oud image"
                                fill
                                className="object-contain"
                                />
                        </div>
                    <div className={cn("image-container",
                        "relative w-14 h-8 desktop:w-20 desktop:h-12")}>
                        <Image src={"/assets/brands/2.svg"}
                                alt="arabian oud image"
                                fill
                                className="object-contain"
                                />
                        </div>
                    <div className={cn("image-container",
                        "relative w-14 h-8 desktop:w-28 desktop:h-20")}>
                        <Image src={"/assets/brands/3.svg"}
                                alt="arabian oud image"
                                fill
                                className="object-contain"
                                />
                        </div>
                    <div className={cn("image-container",
                        "relative w-14 h-8 desktop:w-24 desktop:h-16")}>
                        <Image src={"/assets/brands/4.svg"}
                                alt="arabian oud image"
                                fill
                                className="object-contain"
                                />
                        </div>


                    </div>

        </div>
    )
}