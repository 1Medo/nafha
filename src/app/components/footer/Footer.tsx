import { cn } from "@/lib/utils";
import {FooterAbout, FooterLinks, FooterEnd} from "@/app/components/footer";
import NewsLetter from "./components/NewsLetter";

export default function Footer() {
    return (
        <div className={cn("bottom-section")}>
            <NewsLetter />
            <footer className={cn("bg-Background-bg-inverse py-[84px]")}>
                <div className={cn("container",
                    "flex flex-col justify-between gap-16"
                )}>
                    <div className={cn("footer-top",
                        "flex justify-between gap-24 tablet:gap-20 mobile:gap-20",
                        "tablet:flex-col mobile:flex-col"
                    )}>
                        <FooterAbout />
                        <FooterLinks />
                    </div>
                    <FooterEnd />
                </div>
            </footer>
        </div>
    )
}