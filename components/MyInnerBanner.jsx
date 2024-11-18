'use client'
import React from 'react';
import styled from "styled-components";
import {Col, Container, Row} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,EffectCreative,Navigation } from 'swiper/modules';
import { Img } from "@/components/Img";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

const bannerContent = [
    {
        id:1,
        title:"Interior Solutions",
        imgSrc:"/images/static/slider/1.jpg"
    },
    {
        id:2,
        title:"Building Management",
        imgSrc:"/images/static/slider/2.jpg"
    },
    {
        id:3,
        title:"Rental Services",
        imgSrc:"/images/static/slider/3.jpg"
    },
    {
        id:4,
        title:"Legal & Logistics Services",
        imgSrc:"/images/static/slider/4.jpg"
    },
    {
        id:5,
        title:"Renovations & Modifications",
        imgSrc:"/images/static/slider/5.jpg"
    },
    {
        id:6,
        title:"Building Constructions",
        imgSrc:"/images/static/slider/6.jpg"
    }
]

function Title({ text }){
    const tempStr = text.split(" ");
    const lastWord = tempStr.pop();
    return(
        <h2 className="bannerTitle">{tempStr.join(" ")}
            <span className="bannerLastWord">{" "+lastWord}</span>
        </h2>
    );
}



export default function MyInnerBanner() {
    return (
        <StyledInnerBanner>
                    <div className="swiperCtn">
                        <Swiper
                            modules={[Autoplay,EffectCreative,Navigation]}
                            effect={'creative'}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay:3000,
                            }}
                            creativeEffect={{
                                prev:{
                                    translate:["-30%",0,0]
                                },
                                next: {
                                    translate:["100%",0,0]
                                }
                            }}
                            loop={true}
                            className="customTransition"
                            speed={2000}
                        >
                        {
                            bannerContent.map((content) => (
                                <SwiperSlide key={content.id}>
                                    <div className="">
                                        <Img src={content.imgSrc} height={"100%"} width={"100%"} top="0px" left="0px" objectFit={"cover"} />
                                        
                                    </div>
                                    <Container>
                                            <Title text={content.title} />
                                        </Container>
                                </SwiperSlide>
                            ))
                        }
                        </Swiper>
                    </div>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
    position: relative;
    .customTransition {
        height:100vh;
        .swiper-wrapper {
            transition-timing-function: cubic-bezier(.59,0,.54,.99);
        }
        .swiper-slide {
            border:none;
        }
        .container {
            color:white;
            position: relative;
            height:100%;
            left:10px;
            .bannerTitle {
                position:absolute;
                padding:0;
                margin:0;
                left:0;
                bottom: 120px;
                font-size:48px;
                transform: translateX(0%);
                transition: transform 1500ms 100ms cubic-bezier(.59,0,.54,.99);
                .bannerLastWord {
                    font-weight: 800;
                }
            }
        }
        .swiper-slide-next {
            .bannerTitle {
                transform:translateX(-1000px);
            }
        }

    }
    
`;
