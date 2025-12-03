import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "./atoms/Button";
import { CiShoppingBasket } from "react-icons/ci";
import { IoChevronBackOutline } from "react-icons/io5";
import BrandsBar from "./BrandsBar";



export default function HeroSection() {
  return (
    <div className="mb-20">
    <div
      className={cn(
        "hero-section relative overflow-hidden",
        "desktop:h-[640px]",
        "tablet:h-[400px]",
        "mobile:h-[564px]"
      )}
      >
      <div className="absolute inset-0 -z-10 hidden sm:block">
        <Image
          src="/assets/hero.webp"
          alt="Hero section image"
          fill
          className="object-cover"
          style={{ objectPosition: "left 25%" }}
          priority
          />
        </div>
        <div className="absolute inset-0 -z-10 block sm:hidden">
        <Image
          src="/assets/hero-small-final.jpg"
          alt="Hero section image"
          fill
          sizes="auto"
          className="object-cover"
          style={{ objectPosition: "25% 25%" }}
          priority
          />
      </div>

      <div className={cn("container",
        "h-full flex justify-center flex-col desktop:gap-10",
        "tablet:gap-6 mobile:gap-6"
      )}>
        <div className={cn("text-content",
        "sm:max-w-[52%] flex gap-5 flex-col",
      )}>
          <h1 className={cn("desktop:text-h1 text-nowrap",
            "tablet:text-h2 lg:text-h2 mobile:text-h2",
            "text-center sm:text-right"
          )}>
            اكتشف فخامة<br/> العطور التي تعبّر عنك
          </h1>
          <p className={cn("desktop:text-subtitle",
            "lg:text-body tablet:text-body mobile:text-body",
            "text-center sm:text-right"
          )}>مجموعة مختارة من أجود العطور الشرقية والغربية التي تمنحك حضورًا لا يُنسى، العطر ليس مجرد رائحة بل أسلوب حياة.</p>
        </div>

        <div className={cn("buttons",
          "flex gap-3 justify-center",
          "mobile:flex-col sm:justify-start"
        )}>
          <Button variant="primary" trailingIcon={<CiShoppingBasket size={20}/>} className="mobile:w-full">تسوق الآن</Button>
          <Button variant="secondary" trailingIcon={<IoChevronBackOutline size={20}/>} className="mobile:w-full">عرض المزيد</Button>
        </div>

      </div>
    </div>

        <BrandsBar />
      </div>
  );
}
