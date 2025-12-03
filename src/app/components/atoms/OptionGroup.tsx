import { useState } from "react";
import Option from "./Option"
import { cn } from "@/lib/utils";

interface OptionGroupProps {
  options: Array<number>;
  onSelect?: (value: number) => void;
  selected?: number;
}

export default function OptionGroup({options, onSelect}: OptionGroupProps) {
    const [internalSelected, setInternalSelected] = useState(options[0])
    return (
        <div className={cn("flex justify-center items-center w-fit gap-1",
          "mobile:w-full"
        )}>
    {options.map((opt) => (
        <Option 
        key={opt}
        value={opt}
        onSelect={() => {
            setInternalSelected(opt)
            onSelect?.(opt)
        }}
        isSelected={internalSelected === opt} 
      />
    ))}
  </div>
)

}