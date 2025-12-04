import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiCaretDoubleLeft } from "react-icons/pi";


type FooterLink = {
  title?: string; 
  link: string;
  linkName: string;
}

type FooterLinkColumnProps = {
  label: string;
  links: FooterLink[];
  target?: string;
}

export default function FooterLinkColumn({ label, links, target }: FooterLinkColumnProps) {
  return (
    <div className={cn("footer-column [color:var(--Text-text-inverse)]",
        "flex flex-col gap-6"
    )}>

      <h4 className={cn("text-h4")}>{label}</h4>
      <ul className={cn("")}>
        {links.map((item, index) => (
          <li key={index} className="flex flex-col gap-1 mb-3">
            <span>
                {item.title ? (
                <span className={cn("text-body")}>{item.title}:</span>
              ) : null}
            </span>
            <Link href={item.link} target={target} className={cn("[color:var(--Buttons-button-footer-text-color)] hover:[color:var(--Brand-primary)] text-body transition-colors",
                "flex gap-2 items-center"
            )}>
                <PiCaretDoubleLeft />
                {item.linkName}
            </Link>

          </li>
        ))}
      </ul>
    </div>
  );
}
