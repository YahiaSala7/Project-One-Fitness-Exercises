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
import ExercisesCard from "./ExercisesCard";
function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyPart }) {
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
            {isBodyPart ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                numberOfSlides={numberOfSlides}
              />
            ) : (
              <ExercisesCard exercise={item} />
            )}
          </SwiperSlide>
        </Stack>
      ))}
    </Swiper>
  );
}

export default HorizontalScrollbar;
