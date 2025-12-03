import { cn } from "@/lib/utils";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";


type CommentCardProps = {
    name?: string;
    jobTitle?: string;
    userImgSrc?: string;
    stars?: number;
    commentContent: string;
    colSpan?: string;
}
const variants = {
    default: "desktop:col-span-4 tablet:col-span-8 mobile:col-span-4",
    oneProduct: "desktop:col-span-12 tablet:col-span-8 mobile:col-span-4"
}

export default function CommentCard({name, jobTitle, stars, commentContent, colSpan = variants.default}: CommentCardProps) {
    return (
        <div className={cn("comment",
            "bg-Background-bg-tertiary border border-Background-border-color rounded-lg p-6",
            "flex flex-col gap-3",
            colSpan
        )}>
                <div className={cn("top-row",
                "flex justify-between items-center"
                )}>
                    <div className="stars-box -scale-x-100">
                        <ReactStars
                            count={5}
                            value={stars}
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
                    <BiSolidQuoteAltLeft size={32} className="text-Background-bg-secondary"/>
            </div>

            <div className={cn("comment-content",
                "text-body [color:var(--Text-text-primary)]"
            )}>
                {commentContent}
            </div>

            <div className={cn("bottom-row",
                "flex gap-2 mt-auto items-center"
            )}>
                <div className="img-container w-12 h-12 rounded-full overflow-hidden relative">
                <Image src={`/assets/comments/1.jpg`} alt="صورة المعلق" fill className="object-cover" quality={75}/>
                </div>

                    <div className={cn("customer-data",
                        "flex flex-col")
                    }>

                        <h5 className="text-h5 [color:var(--Text-text-secondary)]">{name}</h5>
                        <p className="text-medium [color:var(--Neutrals-500)]">{jobTitle}</p>

                    </div>
            </div>

        </div>
    )
}