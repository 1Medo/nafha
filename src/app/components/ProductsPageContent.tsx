"use client";

import { useState } from "react";
import FilterWrapper from "./FilterWrapper";
import AllProducts from "./AllProducts";
import { cn } from "@/lib/utils";

export default function ProductsPageContent() {
    const [isFilterOpen, setFilterOpen] = useState(false)

    interface FiltersState {
        category: string[];
        brands: string[];
        concentration: string[];
        price: [number, number];
        rating: number;
    }

    const [filters, setFilters] = useState<FiltersState>({
        category: [],
        brands: [],
        concentration: [],
        price: [100, 25000],
        rating: 0
    });



    return (
        <div className={cn("container",
            "grid mobile:grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop",
            "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop",
            "mb-20"
        )}>
            <FilterWrapper isFilterOpen={isFilterOpen} onOpenChange={setFilterOpen} filters={filters} setFilters={setFilters}
                className={"col-span-3"}
            />
            <AllProducts changeFilterStatus={setFilterOpen} isFilterOpen={isFilterOpen} className={cn("desktop:col-span-9 tablet:col-span-8 mobile:col-span-4",
            )} />
        </div>
    )
}