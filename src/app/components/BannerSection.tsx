import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "./atoms/Button";
import { CiShoppingBasket } from "react-icons/ci";



export default function BannerSection() {
    return (

        <div className="banner-section mb-20">
            <div
              className={cn(
                "relative",
                "h-96 sm:h-72")}
              >
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/assets/cta_section.webp"
                  alt="banner section image"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "left 25%" }}
                  priority
                  />
                  <div className="absolute inset-0 bg-black/65"></div>
                </div>
                
                <div className={cn("banner-content container",
                    "flex flex-col justify-center items-center text-center h-full gap-5"
                )}>
                    <h2 className={cn("text-h3 sm:text-h2 [color:var(--Text-text-inverse)]")}>افضل واشهر العطور في السوق</h2>
                    <div className={cn("text-body [color:var(--Text-text-muted)] max-w-[652px]")}>استمتع برحلةٍ عطرية فاخرة تجمع بين الأصالة وأناقة التفاصيل، حيث اخترنا لك بعناية مجموعة من أشهر العطور في السوق، لتعبّر عن ذوقك الراقي وتمنحك حضورًا لا يُنسى.</div>
                    <Button variant="primary" trailingIcon={<CiShoppingBasket size={20}/>}>تسوق الآن</Button>
                </div>



            </div>
        </div>
    )
}