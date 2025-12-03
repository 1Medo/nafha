import Input from "../atoms/Input"
import { CiSearch } from "react-icons/ci";
import { Logo, DesktopNav, Actions, MobileNav } from "@/app/components/header";
import { cn } from "@/lib/utils"
import Link from "next/link";
export default function Header() {

    return (
        <header className="w-full tablet:sticky mobile:sticky top-0 z-50 bg-Background-bg-primary shadow-md">
            <div
                className={cn(
                    "container",
                    "py-4"
                )}
            >
                <div className="firstRow w-full flex items-center justify-between mb-1">
                    
                    <div className="flex items-center gap-2">
                        <div className="desktop:hidden">
                        <MobileNav></MobileNav>
                        </div>
                        <Link href="/">
                        <Logo className="mobile:w-7 tablet:w-7"/>
                        </Link>
                    </div>

                    <div className="mobile:hidden tablet:hidden">
                        <DesktopNav />
                    </div>

                    <div>
                        <Actions />
                    </div>

                </div>

                <div className="secondRow w-full flex justify-center tablet:w-full">
                    <Input
                        placeholder="ابحث عن العطر الذي تريده"
                        trailingIcon={<CiSearch className="stroke-[0.4px]"/>}
                        type="text"
                        width="w-full"
                    />
                </div>
            </div>
        </header>
    )
}