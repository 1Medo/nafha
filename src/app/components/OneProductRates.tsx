"use client";

import { cn } from "@/lib/utils"
import CommentCard from "./CommentCard"
import commentsList from "@/constants/comments"
import Button from "./atoms/Button";
export default function OneProductRates() {
        const comments = commentsList.slice(0, 3).map((comment) => 
        <CommentCard 
            key={comment.id} {...comment}
            />
        )
    return (
        <div className={cn(
            "flex flex-col gap-6 desktop:col-span-8 tablet:col-span-full mobile:col-span-full"
            )}>
                {comments}
                <Button variant="secondary" className="w-full">عرض المزيد</Button>
        </div>

    )
}