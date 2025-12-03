import { cn } from "@/lib/utils";
import Button from "./atoms/Button";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";


type SectionBarProps = {
    title: string;
    desc: string;
    buttonText?: string;
}

export default function SectionBar({title, desc, buttonText = "عرض الكل"} :SectionBarProps) {
    return(

        <div className={cn("bar",
            "mb-10"
        )}>
        <div className={cn("container",
            "flex justify-between items-end"
        )}>
            <div className={cn("content")}>
                <div className={cn("title",
                    "text-h3",
                    "mobile:text-h4"
                )}>{title}</div>
                <div className={cn("desc",
                    "text-body",
                    "mobile:text-large"
                )}>{desc}</div>
            </div>
            <Link href={"/products"}>
            <Button variant="tertiary" trailingIcon={<IoChevronBackOutline />}>
            {buttonText}
            </Button>
            </Link>
        </div>
    </div>
    )
}