"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Radio from "./atoms/Radio"
import categoriesList from "../../constants/categoriesList"
import brandsList from "../../constants/brandsList"
import Button from "./atoms/Button"
import { useState } from "react";
import concentrationsList from "@/constants/concentrationsList";
import { SliderWithCollision } from "@/components/ui/SliderWithCollision";
import ReactStars from "react-rating-stars-component";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import CheckBox from "./atoms/CheckBox";

const categoriesWithAll = [
  { categoryName: "الكل", productsNumber: 100, value: "all" },
  ...categoriesList
];

const brandsWithAll = [
  { brandName: "الكل", productsNumber: 100, value: "all" },
  ...brandsList
];

const concentrationWithAll = [
  { concentration: "الكل", productsNumber: 100, value: "all" },
  ...concentrationsList
];

interface FilterSectionProps<T> {
  title: string;
  list: T[];
  name: string;
  keyPrefix: string;
  labelKey: keyof T;
  countKey: keyof T;
  showMore?: boolean;
  showMoreState?: boolean;
  toggleShowMore?: () => void;
  type?: "radio" | "checkbox";
  value?: string | string[]; 
  onChange?: (val: string) => void; 
}

function FilterSection<T extends Record<string, string | number>>({
  title,
  list,
  name,
  keyPrefix,
  labelKey,
  countKey,
  showMore,
  showMoreState,
  toggleShowMore,
  type,
  value,
  onChange
}: FilterSectionProps<T>) {
  const items = showMoreState ? list : list.slice(0,5);

  return (
    <AccordionItem value={name}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        {items.map((item, i) => {
          const id = `${keyPrefix}-${i}`;
          return (
            <label key={i} htmlFor={id} className="flex justify-between items-center cursor-pointer select-none">
              <div className="flex items-center">
                {
                  type === "radio" ?
                  <Radio name={name} value={String(item[labelKey])} id={id} 
                  checked={value === String(item[labelKey])}
                  onChange={(val) => onChange?.(val)}
                  />
                  :

                  <CheckBox name={name} value={String(item[labelKey])} id={id} 
                  checked={
                        value === "all"
                          ? item.value === "all" 
                          : Array.isArray(value) && value.includes(String(item[labelKey]))
                      }
                  onChange={(val) => onChange?.(val)}
                  />
                }
                <span className="mr-2">{item[labelKey]}</span>
              </div>
              <span className="text-muted">{item[countKey]}</span>
            </label>
          );
        })}
        {showMore && toggleShowMore && (
          <Button variant="tertiary" onClick={toggleShowMore} className="h-fit">
            عرض {showMoreState ? "أقل" : "المزيد"}
          </Button>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

type FiltersState = {
  category: string[];
  brands: string[];
  concentration: string[];
  price: [number, number];
  rating: number;
}

interface FilterProps {
  className?: string;
    filters: FiltersState;
  setFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}
export default function Filter({className, filters, setFilters}: FilterProps) {
    const [showBrands, setShowBrands] = useState(false)
    const ratings = [5, 4, 3, 2];

  return (
    <div className={cn("filter",
      "bg-Background-bg-tertiary border border-Background-border-color rounded-lg p-4",
      className
    )}>
      <Accordion type="multiple" defaultValue={["category", "brands", "concentration", "price", "rate"]} className="gap-5">
        
        {/* القسم */}
        <FilterSection
          title="القسم"
          list={categoriesWithAll}
          name="category"
          keyPrefix="categ"
          labelKey="categoryName"
          countKey="productsNumber"
          value={filters.category.length === 0 ? "all" : filters.category}
          onChange={(val) => {
            if (val === "all") {
            setFilters(prev => ({ ...prev, category: [] }));
            return;
            }
            setFilters(prev => ({
            ...prev,
            category: prev.category.includes(val)
            ? prev.category.filter(b => b !== val)
            : [...prev.category, val]
            }))
          }}
        />

        {/* التركيز */}
        <FilterSection
          title="التركيز"
          list={concentrationWithAll}
          name="concent"
          keyPrefix="concent"
          labelKey="concentration"
          countKey="productsNumber"
          value={filters.concentration.length === 0 ? "all" : filters.concentration}
          onChange={(val) => {
            if (val === "all") {
            setFilters(prev => ({ ...prev, concentration: [] }));
            return;
            }
            setFilters(prev => ({
            ...prev,
            concentration: prev.concentration.includes(val)
            ? prev.concentration.filter(b => b !== val)
            : [...prev.concentration, val]
            }))
          }}
        />

        {/* العلامة التجارية */}
        <FilterSection
          title="العلامة التجارية"
          list={brandsWithAll}
          name="brand"
          keyPrefix="brand"
          labelKey="brandName"
          countKey="productsNumber"
          showMore={true}
          showMoreState={showBrands}
          toggleShowMore={() => setShowBrands(prev => !prev)}
          value={filters.brands.length === 0 ? "all" : filters.brands}
          onChange={(val) => {
            if (val === "all") {
            setFilters(prev => ({ ...prev, brands: [] }));
            return;
            }
            
            setFilters(prev => ({
            ...prev,
            brands: prev.brands.includes(val)
            ? prev.brands.filter(b => b !== val)
            : [...prev.brands, val]
            }))
          }}
          
        />

        {/* السعر */}
        <AccordionItem value="price">
          <AccordionTrigger>السعر</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4">
            <SliderWithCollision
              min={100}
              max={25000}
              step={100}
              value={filters.price}
              onValueChange={(values) => setFilters(prev => ({ ...prev, price: [values[0], values[1]] }))}
              className="pt-4"
              minStepsBetweenThumbs={1}
              inverted={true}
            />
            <div className={cn("input-price", "flex justify-between")}>
              <div className="from">
                <div>من</div>
                <div>{filters.price[0].toLocaleString()} ر.س</div>
              </div>
              <div className="to">
                <div>إلى</div>
                <div>{filters.price[1].toLocaleString()} ر.س</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* التقييم */}
<AccordionItem value="rate">
  <AccordionTrigger>التقييم</AccordionTrigger>
  <AccordionContent className="flex flex-col gap-4">
<label htmlFor="rating-all" className="flex justify-between items-center cursor-pointer select-none">
  <div className="flex items-center">
    <Radio id="rating-all" name="rating" value="0" 
    checked={filters.rating === 0}
    onChange={() => setFilters(prev => ({ ...prev, rating: 0 }))}/>
    <span className="mr-2">الكل</span>
  </div>
  <span className="text-muted">(100)</span>
</label>

    {ratings.map((rate, i) => {
      const id = `rating-${i}`;
      return (
        <label key={i} htmlFor={id} className="flex items-center justify-between cursor-pointer gap-2 select-none">
          <div className="flex items-center">
          <Radio 
            id={id}
            name="rating"
            value={rate.toString()} 
            checked={rate === filters.rating}
            onChange={() => setFilters(prev => ({ ...prev, rating: rate }))}
          />

          <div className="stars-box -scale-x-100 mr-2">
          <ReactStars
            count={5}
            value={rate}
            size={16}
            isHalf={false}
            edit={false}
            emptyIcon={<IoIosStar />}
            halfIcon={<IoIosStarHalf />}
            filledIcon={<IoIosStar />}
            color="#DADACA"
            activeColor="#FA9338"
            />

            </div>
            </div>
            <span className="text-muted">(100)</span>
        </label>
      )
    })}

  </AccordionContent>
</AccordionItem>
      <Button variant="secondary" size="full" className="h-10" onClick={() =>
    setFilters({
      category: [],
      brands: [],
      concentration: [],
      price: [100, 25000],
      rating: 0
    })
  }>إعادة ضبط</Button>
      </Accordion>
    </div>
  )
}
