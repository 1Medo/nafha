import { cn } from "@/lib/utils";
import FooterLinkColumn from "./FooterLinkColumn";

export default function FooterLinks() {
    return (
        <div className={cn("footer-links-parent",
            "flex justify-between w-full",
            "mobile:flex-col mobile:gap-10"
        )}>
            <FooterLinkColumn label="حسابي" links={[
                {link:"/", linkName:"حسابي"},
                {link:"/", linkName:"طلباتي"},
                {link:"/", linkName:"سلة المشتريات"},
                {link:"/", linkName:"المفضلة"},
                ]}/>
            <FooterLinkColumn label="روابط مهمة" links={[
                {link:"/", linkName:"من نحن"},
                {link:"/", linkName:"سياسة الخصوصية"},
                {link:"/", linkName:"الشروط والأحكام"},
                {link:"/", linkName:"الدعم الفني"},
                ]}/>
            <FooterLinkColumn target="_blank" label="روابط مهمة" links={[
                {link:"/", title:"واتساب", linkName:"https://wa.me/0096123456789123"},
                {link:"https://mail.google.com/mail/?view=cm&to=nafha.team@gmail.com", title:"البريد", linkName:"nafha.team@gmail.com"},
                ]}/>
        </div>
    )
}