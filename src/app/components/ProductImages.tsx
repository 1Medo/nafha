"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState } from "react";
import Button from "./atoms/Button";
import { CiHeart } from "react-icons/ci";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import type { Swiper as SwiperType } from "swiper";

export default function ProductImages({ images }: { images: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div
      className={cn(
        "images-box",
        "flex flex-row-reverse w-fit gap-4",
        "tablet:flex-col tablet:justify-center tablet:w-full tablet:items-center",
        "mobile:flex-col mobile:justify-center mobile:w-full mobile:items-center"
      )}
    >
        <div
        className={cn(
            "main-image",
            "relative border w-[400px] border-Background-border-color rounded-lg bg-white p-2 tablet:px-10 flex justify-center items-center overflow-hidden",
            "tablet:w-full",
            "mobile:w-full "
        )}
        >
        <div className={cn("w-full h-full relative  flex items-center justify-center")}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-[360px] h-[400px] tablet:w-full tablet:h-[520px] mobile:w-full mobile:h-[420px]"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="relative w-full h-full">
                <Image
                  src={`/assets/products/${img}`}
                  alt={`Slide ${i}`}
                  fill
                  sizes="auto"
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button
          variant="secondary"
          iconOnly={<CiHeart size={12} />}
          className={cn("absolute w-10 h-10 top-2 left-4 p-2 z-10")}
        />
      </div>

      <div
        className={cn(
          "thumb-images",
          "flex flex-col justify-between gap-6",
          "tablet:flex-row tablet:justify-between tablet:w-full",
          "mobile:flex-row mobile:justify-between mobile:w-full"
        )}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "w-24 basis-full relative border border-Background-border-color rounded-lg transition-opacity",
              "tablet:h-32 mobile:h-24",
              i !== activeIndex && "opacity-50"
            )}
          >
            <Image
              src={`/assets/products/${img}`}
              alt="thumbnail image"
              fill
              sizes="auto"
              onClick={() => {
                setActiveIndex(i);
                swiperRef.current?.slideTo(i);
              }}
              className={cn("object-cover cursor-pointer")}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
