import { useSwiper } from "swiper/react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import IconButton from "@mui/material/IconButton";

export default function SwiperNavButtons({ listTitle }) {
  const swiper = useSwiper();

  return (
    <div className="flex flex-row items-center justify-between h-[30px]">
      <IconButton onClick={() => swiper.slidePrev()}>
        <ArrowLeftIcon fontSize="large" />
      </IconButton>
      <h3 className="text-xs">{listTitle}</h3>
      <IconButton onClick={() => swiper.slideNext()}>
        <ArrowRightIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
