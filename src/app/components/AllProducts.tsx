"use client";

import { useEffect, useState } from "react";
import Button from "./atoms/Button";
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { PiFunnel } from "react-icons/pi";
import { cn } from "@/lib/utils";
import AllProductsList from "@/AllProductsList";
import { BsSortDown, BsSortUp } from "react-icons/bs";

type ProductsBarProps = {
  changeFilterStatus: (status: boolean) => void;
  isFilterOpen: boolean;
  className: string;
};

export default function AllProducts({ changeFilterStatus, isFilterOpen, className}: ProductsBarProps) {
  const [listView, setListView] = useState(false);
  const [isPriceDesc, setisPriceDesc] = useState(true);

  useEffect(() => {
    const check = () =>{
    if (window.innerWidth <= 640 ) {
        setListView(false)
    }}
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return (

    <div className={cn("all-products", "flex flex-col",
    "mobile:gap-mobile tablet:gap-tablet desktop:gap-desktop",
     className)}>

    <div className={cn("products-bar",
      "bg-Background-bg-tertiary border border-Background-border-color rounded-lg py-3 px-4",
      "flex justify-between")}>
    <div className={cn("buttons",
      "flex gap-2")}>

      {/* Grid View */}
      <div className="sm:flex gap-2 hidden">

      <Button
        variant={listView ? "secondary" : "primary"}
        iconOnly={<CiGrid41 />}
        onClick={() => setListView(false)}
        className="p-2"
        />

      {/* List View */}
      <Button
        variant={listView ? "primary" : "secondary"}
        iconOnly={<CiBoxList />}
        onClick={() => setListView(true)}
        className="p-2"
        />

      </div>
      {/* Filter */}
      <Button
        variant={isFilterOpen ? "primary" : "secondary"}
        iconOnly={<PiFunnel />}
        onClick={() => changeFilterStatus(!isFilterOpen)}
        className="p-2 desktop:hidden"
        />

        </div>

        <button className={cn("price-sort",
          "flex place-items-center"
        )} onClick={() => setisPriceDesc((prev) => !prev)}>
          <span className="text-primary">
            السعر:
          </span>
          <span className="tablet:hidden mobile:hidden">
            {isPriceDesc 
              ? " من الأعلى إلى الأقل ↓"
              : " من الأقل إلى الأعلى ↑"}
          </span>
          <span className="desktop:hidden mr-2">
          {isPriceDesc
          ? <BsSortUp  size={24}/>
          : <BsSortDown size={24}/>
        }
        </span>
        </button>
    </div>

        <AllProductsList isList={listView}/>
    </div>

  );
}
