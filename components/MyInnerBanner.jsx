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
        <Container>
            <Row>
                <Col>
                    <h2 className="bannerTitle">{tempStr.join(" ")}<span className="bannerLastWord">{" "+lastWord}</span></h2>
                </Col>
            </Row>
        </Container>
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
                            translate:["-10%",0,0]
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
                            <div className="swiperSlide" >
                            <Img src={content.imgSrc} height={"100%"} width={"100%"} top="0px" left="0px" objectFit={"cover"} />
                            </div>
                            <Title text={content.title} />
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
    z-index: -10;
    min-height: 100vh;

    .swiperCtn {
        min-height:100vh;
    }
    .customTransition {
        .swiper-wrapper {
            transition-timing-function: cubic-bezier(.4,0,.69,1);
        }
        .swiper-slide {
            border:none;
            display:flex;
            height:100vh;
            justify-content: center;
            position:relative;
        }
        .container {
            width:100%;
            position: absolute;
            left:0;
            bottom:150px;
            color:white;

            .bannerTitle {

                .bannerLastWord {
                    font-weight: 800;
                }
            }
        }
    }
    
`;
