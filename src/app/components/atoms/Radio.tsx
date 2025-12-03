import React from "react";
import { switchesSharedStyles } from "@/app/utils/switchesSharedStyles";
import { cn } from "@/lib/utils";

interface RadioProps {
  name: string;
  value: string;
  className?: string;
  id: string,
  checked?: boolean;
  onChange?: (val: string) => void;
}

export default function Radio({ name, value, id, className, checked, onChange}: RadioProps) {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        className="peer hidden"
        checked={checked}
        onChange={() => onChange?.(value)}
      />

      <span
        className={cn(
          switchesSharedStyles.box,
          switchesSharedStyles.states,
          "rounded-full relative peer-checked:[&_span]:opacity-100",
          className
        )}
      >
        <span className="circle w-1/2 h-1/2 bg-Brand-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity"></span>
      </span>
    </>
  );
}
