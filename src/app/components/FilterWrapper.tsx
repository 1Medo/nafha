"use client";


import { Sheet, SheetClose, SheetContent, SheetOverlay, SheetTitle } from "@/components/ui/sheet";
import Filter from "./Filter";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Button from "./atoms/Button";
import { RxCross1 } from "react-icons/rx";

type FiltersState = {
  category: string[];
  brands: string[];
  concentration: string[];
  price: [number, number];
  rating: number;
}

type FilterWrapperProps = {
  isFilterOpen: boolean;
  onOpenChange: (status: boolean) => void;
  filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
  className: string;
}

export default function FilterWrapper({isFilterOpen, onOpenChange, filters, setFilters, className}: FilterWrapperProps) {
        const [isOpen, setIsOpen] = useState(isFilterOpen);
        useEffect(() => {
            setIsOpen(isFilterOpen);
        }, [isFilterOpen]);

return <>
          <Sheet open={isOpen} onOpenChange={onOpenChange}>
    <SheetOverlay className={cn("desktop:hidden")} />

    <SheetTitle className="hidden">فلتر المنتجات</SheetTitle>
        <SheetContent side="right"   className={cn(
            "bg-background text-foreground will-change-transform overflow-auto",
            isOpen ? 'animate-slide-in-right' : 'animate-slide-out-right',
            "[&>button:first-of-type]:hidden",
            "p-0 desktop:hidden"
        )}>

          <Filter className="tablet:p-14 mobile:px-6 mobile:py-10" filters={filters} 
        setFilters={setFilters}/>
            <SheetClose asChild>
              <Button 
                variant='tertiary' 
                iconOnly={<RxCross1 size={22}/>} 
                className="absolute top-4 left-4 [color:var(--Functional-Error-error-icon)]"
                ></Button>
            </SheetClose>
        </SheetContent>
      </Sheet>

    <div className={cn("desktop:block tablet:hidden mobile:hidden",
      className
    )}>
        <Filter filters={filters} setFilters={setFilters} className={className}/>
    </div>
</>
}
