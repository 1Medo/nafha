import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';

type SliderWrapperProps = {
    className: string;
    spaceBetween: number;
    padding: string;
    categories: Array<React.ReactNode>;
}

export default function SliderWrapper({ className, spaceBetween, padding, categories }:SliderWrapperProps) {
  return (
    <div className={className}>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView="auto"
        centeredSlides={false}
        pagination={{ clickable: true }}
        spaceBetween={spaceBetween}
        modules={[Pagination]}
        className={cn("!flex !pb-11", padding)}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="!w-auto">
            {category}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
