import { cn } from "@/lib/utils";

interface OptionProps {
    onSelect: (value: number) => void;
    value: number;
    isSelected?: boolean;
}



export default function Option({onSelect, value, isSelected} :OptionProps) {

    return (
        <button onClick={() => onSelect(value)} className={
            cn(
            isSelected ? "border-Brand-primary": "border-Background-border-color",
            "bg-neutral-50 border rounded w-20 h-12 [color:var(--Text-text-primary)] text-h5",
        "transition-all mobile:w-full mobile:h-16")
            }>
        {value}ml
        </button>
    )
}