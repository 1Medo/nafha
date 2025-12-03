import { cn } from "@/lib/utils";
import Button from "../../atoms/Button";
import { PiFacebookLogo, PiSnapchatLogo, PiInstagramLogo, PiTwitterLogo } from "react-icons/pi";


export default function FooterAbout() {
    return (
        <div className={cn("footer-about",
            "w-full desktop:max-w-[300px]  max-w-[560px] flex flex-col gap-8 [color:var(--Text-text-inverse)]"
        )}>
            <div className={cn("content",
                "flex flex-col gap-6"
            )}>
                <div className={cn("text-h2"
                )}>متجر نفحة</div>
                <p className={cn("text-body",
                    "leading-7"
                )}>متجر نفحة من افضل المتاجر التى تقوم ببيع العطور بأفضل الاسعار وماركات عالمية تسوق الان واطلع على المزيد من العطور  واستمتع بأفضل العروض </p>
            </div>
            <div className={cn("social",
                "flex gap-2"
            )}>
                <Button variant="primary" iconOnly={<PiFacebookLogo />} className="p-2"></Button>
                <Button variant="primary" iconOnly={<PiSnapchatLogo />} className="p-2"></Button>
                <Button variant="primary" iconOnly={<PiInstagramLogo />} className="p-2"></Button>
                <Button variant="primary" iconOnly={<PiTwitterLogo />} className="p-2"></Button>
            </div>
        </div>
    )
}