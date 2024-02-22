"use client";
import { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import SwiperNavButtons from "./SwiperNavButtons";

export default function DrinkSwiper({ dataList, listTitle }) {
  const [data, setData] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    if (dataList) {
      setData(dataList.drinks || []);
    }
  }, [dataList]);
  console.log(dataList, "datalist");
  return (
    <div className="bg-neutral-100 m-2">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={false}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        breakpoints={{
          480: { slidesPerView: 3 },
          740: { slidesPerView: 5 },
          1275: { slidesPerView: 8 },
        }}
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.idDrink}
            className="!flex justify-center items-center "
          >
            <div className="relative overflow-hidden mx-2 w-[150px] h-[150px] pt-1 flex justify-center items-center rounded-sm">
              <Link href={`/search/${item.idDrink}`}>
                <Image
                  src={item.strDrinkThumb}
                  width={150}
                  height={150}
                  alt={item.strDrink}
                />
                <div className="absolute inset-0 flex justify-center items-center hover:bg-red-200/50">
                  <p className="text-s text-black font-bold text-center">
                    {item.strDrink}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <SwiperNavButtons listTitle={listTitle} />
      </Swiper>
    </div>
  );
}
