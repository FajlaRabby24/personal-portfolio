import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Carousel = ({ images }) => {
  return (
    <div className="h-full ">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="  h-full"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={image}
              alt={`image.png`}
              className=" rounded-xl h-full object-cover  w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
