import React from "react";
import { cn } from "@/lib/utils"

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "normal" | "full" | "iconOnly" | "responsive";
  iconOnly?: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "normal",
  children,
  disabled,
  leadingIcon,
  trailingIcon,
  iconOnly,
  className,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    full: "w-full h-12",
    responsive: "w-[156px] h-12 mobile:w-full",
    normal: "w-[156px] h-12",
    iconOnly: "w-[40px] h-[40px] rounded-full",
  };

  const base = "text-buttonText rounded-lg transition-all flex flex-row justify-center items-center text-nowrap";

  const variantClasses = {
    primary: `
      bg-Buttons-button-primary-default-bg
      [color:var(--Buttons-button-primary-default-text)]
      hover:bg-Buttons-button-primary-hover-bg
      active:bg-Buttons-button-primary-focus-bg
      p-[10px]
      border border-transparent
    `,
    secondary: `
      border border-Buttons-button-secondary-border
      [color:var(--Buttons-button-secondary-text)]
      hover:bg-Buttons-button-secondary-hover-bg
      active:bg-Buttons-button-secondary-focus-bg
      active:[color:var(--Buttons-button-secondary-focus-text)]
      active:border-Buttons-button-secondary-focus-border
      p-[10px]
    `,
    tertiary: `
      [color:var(--Buttons-button-secondary-text)]
      hover:[color:var(--Buttons-button-secondary-focus-text)]
      p-[5px]
      w-fit
    `,
  };

  const iconColor: string = variant === "primary" ? "var(--Buttons-button-primary-default-icon)" : "var(--Buttons-button-secondary-default-icon)"

    const renderElement = (el: React.ReactNode) => {
    if (!el) return null;
    else if (React.isValidElement(el)) {
        return React.cloneElement(el as React.ReactElement<Record<string, unknown>>, {
            className: cn(iconOnly && "!w-[24px] !h-[24px] desktop:!w-[26px] desktop:!h-[26px]",
              trailingIcon && "mr-[10px]",
              leadingIcon && "ml-[10px]",
            ),
            style: { color: iconColor }
        })
    }
    return el
  }


  return (
    <button 
      className= 
      {cn(base,
          iconOnly ? sizeClasses.iconOnly : sizeClasses[size],
          variantClasses[variant],
          disabled && "opacity-50 pointer-events-none",
        className)}
          disabled={disabled}
      {...props}
    >

        {iconOnly ? renderElement(iconOnly) : (
        <>
            {renderElement(leadingIcon)}
            <span >{children}</span>
            {renderElement(trailingIcon)}
        </>
        )}
        
    </button>
  );
}
