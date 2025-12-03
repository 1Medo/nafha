import Link from "next/link";
import Image from 'next/image'
import { cn } from "@/lib/utils"

type CategoryButtonProps = {
    imageSrc: string;
    categoryName: string;
    link: string;
}

export default function CategoryButton({imageSrc, categoryName, link}: CategoryButtonProps) {
    return (
        <Link href={link} className={cn("categoryButton",
            "flex flex-col gap-2",
            "group"
        )}>
            <div className={cn(" relative w-32 aspect-square group-hover:opacity-70 transition-all rounded-full shadow-md",
            "tablet:w-28 mobile:w-24"
            )}>
            <Image src={`/assets/categories/${imageSrc}`} alt={`صورة القسم ${categoryName}`} fill sizes="auto" className="object-contain"/>
            </div>

            <span className={cn("category-name", "text-center text-body font-normal",
            "tablet:text-body mobile:text-large"
            )}>{categoryName}</span>
        </Link>
    )
}