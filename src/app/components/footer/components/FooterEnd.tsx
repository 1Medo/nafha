import { cn } from "@/lib/utils";
import Image from 'next/image'

export default function FooterEnd() {
    return (
        <div className={cn("footer-end",
            "flex justify-between w-full items-center",
            "mobile:flex-col mobile:gap-3 mobile:items-start"
        )}>
            <div className={cn("copyright",
                "[color:var(--Text-text-inverse)] text-medium"
            )}>جميع الحقوق محفوظة لمتجر نفحة © 2025</div>
            <div className="relative">
            <Image 
                src="/assets/payment-svg.svg" 
                alt="Payment methods image" 
                width={224}
                height={0} 
                className="left-0 object-contain"
            />
            </div>
        </div>
    )
}