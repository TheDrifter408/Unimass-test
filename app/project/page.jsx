'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Parallax } from 'swiper/modules';
import "swiper/css";
import { Img } from "@/components/Img";

export default  function Portfolio() {

    return (
        <div style={{ minHeight:'100vh',border:"1px solid red" }}>
        <Swiper
            modules={[Autoplay,Parallax]}
            parallax={true}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay:3000,
            }}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div style={{ border:"1px solid blue",height:"900px",display:"flex",justifyContent:"center",position:"relative" }}>
                    <Img src="/images/static/slider/1.jpg" height={"100%"} width={"100%"} top="0px" left="0px" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{ border:"1px solid blue",height:"900px",display:"flex",justifyContent:"center",position:"relative" }}>
            <Img src="/images/static/slider/2.jpg" height={"100%"} width={"100%"} top="0px" left="0px" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{ border:"1px solid blue",height:"900px",display:"flex",justifyContent:"center",position:"relative" }}>
            <Img src="/images/static/slider/3.jpg" height={"100%"} width={"100%"} top="0px" left="0px" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{ border:"1px solid blue",height:"900px",display:"flex",justifyContent:"center",position:"relative" }}>
            <Img src="/images/static/slider/4.jpg" height={"100%"} width={"100%"} top="0px" left="0px" />
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    );
};

