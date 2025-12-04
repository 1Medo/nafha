import categoriesList from '@/constants/categoriesList';
import CategoryButton from './CategoryButton';
import { cn } from '@/lib/utils';
import SectionBar from './SectionBar';
import SliderWrapper from './SliderWrapper';
import "../styles/swiper-new-styles.css";


export default function Categories() {
      const categories = categoriesList.map((categ) => 
    <CategoryButton key={categ.categoryName} imageSrc={categ.imageSrc} categoryName={categ.categoryName} link={categ.link}/>
  )

  return( 
    <>
<div className={cn("categories flex flex-col",
                        "mb-20"
)}>
  <SectionBar title="تسوق حسب الفئات" desc="تسوق أحدث الأقسام المضافة" />

  <div className="categories-parent">
    {/* Desktop grid */}
    <div
      className={cn(
        "container flex justify-between w-full gap-5",
        "mobile:hidden tablet:hidden"
      )}
    >
      {categories}
    </div>

    {/* Tablet slider */}
    <SliderWrapper
      className="mobile:hidden desktop:!hidden"
      spaceBetween={54}
      padding="tablet:!px-8"
      categories={categories}
    />

    {/* Mobile slider */}
    <SliderWrapper
      className="tablet:hidden desktop:!hidden"
      spaceBetween={44}
      padding="mobile:!px-4"
      categories={categories}
    />
  </div>
</div>

    </>
)
}
