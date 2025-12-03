import { cn } from "@/lib/utils";
import { CiMail } from "react-icons/ci";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";


export default function NewsLetter() {
    return (
        <div className={cn("news-letter",
            "bg-Background-bg-tertiary py-11 shadow-[0_8px_16px_rgb(0,0,0,0.12)]"
        )}>
            <div className={cn("container",
                "flex justify-between",
                "desktop:gap-16",
                "tablet:flex-col tablet:gap-3",
                "mobile:flex-col mobile:gap-3"
            )}>
                <div className={cn("content",
                    "flex gap-8 items-center",
                    "justify-center",
                    "mobile:gap-2 mobile:flex-col-reverse"
                )
                }>
                    <CiMail className={cn("w-14 h-14 text-Brand-primary stroke-[0.4]",
                                        "tablet:order-2",
                                        "mobile:order-2"
                    )}/>
                    <div className={cn("text-box",
                        "flex flex-col desktop:gap-2",
                        "mobile:gap-1 tablet:gap-1")}>
                        <h4 className={cn("text-h4",
                            "dwhitespace-nowrap",
                            "mobile:text-h5 mobile:text-center"
                        )}>الاشتراك في النشرة البريدية</h4>
                        <p className={cn("text-body",
                            "whitespace-nowrap",
                            "mobile:text-large mobile:text-center"
                        )}>انضم واحصل علي خصم 10% علي مشترياتك التالية!</p>
                    </div>
                </div>
                <div className={cn("email-box",
                    "flex gap-2 w-full items-center",
                    "mobile:flex-col"
                )}>
                        <Input variant="input" width="w-full" placeholder="ادخل البريد الالكتروني"/>
                    <Button variant="primary" size="responsive">اشتراك</Button>
                </div>
            </div>
        </div>
    )
}