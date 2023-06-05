import { Stack } from "@mui/material";
import BodyPart from "./BodyPart";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import "../App.css";
import { useState } from "react";
function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  const [numberOfSlides, setnumberOfSlides] = useState(3);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={numberOfSlides}
      modules={[Navigation, A11y]}
      navigation
      style={{}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>
      {data.map((item) => (
        <Stack
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}>
          <SwiperSlide>
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
              numberOfSlides={numberOfSlides}
            />
          </SwiperSlide>
        </Stack>
      ))}
    </Swiper>
  );
}

export default HorizontalScrollbar;
