import { cn } from "@/lib/utils"
import commentsList from "../../constants/comments"
import CommentCard from "./CommentCard"
import SectionBar from "./SectionBar"   

export default function Comments() {
    const comments = commentsList.slice(0, 3).map((comment) => 
        <CommentCard 
            key={comment.id} {...comment}
            />
    )
    return (
        <div id="feedback">
            <SectionBar title='آراء العملاء' desc='يتم استعراض بعض تعليقات العملاء'/>

<div className={cn("container",
        "grid mobile:grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop",
        "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop",
        "mb-20"
    )}>
        {comments}
</div>
    </div>
    )
    
}