import React from "react";
import { cn } from "@/lib/utils"
import { useId } from 'react';

type InputProps = {
    variant?: "input" | "textarea";
    label?: string;
    supportingText?: string;
    leadingIcon?: React.ReactElement;
    trailingIcon?: React.ReactElement;
    width: string;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>



export default function Input({
    variant,
    label,
    supportingText,
    leadingIcon,
    trailingIcon,
    placeholder,
    width,
    className,
    ...props
}: InputProps) {

    const generatedId = useId()
    
        const renderElement = (el: React.ReactNode) => {
        if (!el) return null;
        else if (React.isValidElement(el)) {
            return React.cloneElement(el as React.ReactElement<Record<string, unknown>>, {
                className: cn(el === trailingIcon ? "left-0": "",
                    variant === "textarea" ? "mt-[22px]":"top-1/2",
                    "w-4 h-4 absolute transform -translate-y-1/2 mx-[16px] text-neutral-400"
                )
            })
        }
        return el
      }

      const base = "peer leading-normal bg-transparent border border-Inputs-input-default-border py-3 placeholder:text-transparent w-[236px] rounded-lg focus:outline-none focus:border-Inputs-input-focus-border hover:border-Inputs-input-hover-border transition-border desktop:text-body text-large [color:var(--Inputs-input-text)]"
    return(
        <div className={cn("flex flex-col gap-1", width)}>

            {label && <label className="text-h5" htmlFor={generatedId}>{label}</label>}

            <div className= {cn("relative w-fit flex", width)}>
            {variant === "textarea" ?
                <>
              <textarea id={generatedId} className={cn(base, "resize-none min-h-40 py-3 align-top w-full",
                leadingIcon ? "pr-[40px]" : "pr-4 pl-4",
              )} placeholder=" "></textarea>
              {renderElement(leadingIcon)}
                </>
              : <>
              <input id={generatedId} className={cn(base,
                leadingIcon ? "pr-[40px]" : "pr-4",
                trailingIcon ? "pl-[40px]" : "pl-4",
                className, width)} placeholder="" {...props}/>
                {renderElement(leadingIcon)}
              {renderElement(trailingIcon)}
            </>
              }
              <span className={cn(
                "absolute top-3 [color:var(--Inputs-input-placeholder)] h-full text-center flex align-top pointer-events-none select-none peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-1 opacity-0 desktop:text-body text-large",
                variant === "textarea" && "h-fit",
                leadingIcon ? "right-[40px]" : "right-4",
                trailingIcon ? "left-[40px]" : "left-4",
            )}>{placeholder}</span>
              </div>
              {supportingText && <span className={cn("text-small pr-2")}>{supportingText}</span>}
        
        </div>
    )
}