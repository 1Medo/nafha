"use client";


import links from "@/constants/NavLinksList"
import { cn } from "@/lib/utils";
import Link from "next/link";

type LinkItems = {
    label: string,
    href: string,
    icon: React.ReactElement;
}

type NavLinksProps = {
    onLinkClick?: () => void;
}

export default function NavLinks({ onLinkClick }:NavLinksProps) {
    return (
        <>
            {links.map((linkItem: LinkItems) =>
                <li key={linkItem.href} className={cn("list-none mobile:h-12 tablet:h-12 flex items-center my-1",
                    "relative after:content-[''] after:absolute after:left-5 after:bottom-1 after:h-[1px] after:w-[85%] after:bg-neutral-300 pb-2 desktop:after:hidden"
                )}>

                        <span className="mobile:inline-block tablet:inline-block hidden ml-4">
                         {linkItem.icon}
                        </span>
                    <Link href={linkItem.href} onClick={onLinkClick} className="flex items-center mobile:w-full mobile:h-full tablet:w-full tablet:h-full hover:pr-p transition-all duration-500 hover:text-Brand-primary">
                        <span className="flex items-center transition-all duration-300 pr-0 tablet:hover:pr-3 mobile:hover:pr-3 h-full">

                        {linkItem.label}
                        </span>
                    </Link>
                    </li>
            )}
            </>
    )
}