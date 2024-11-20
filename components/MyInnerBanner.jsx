'use client'
import React, { useRef } from 'react';
import styled from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
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

    const swiperRef = useRef(null);

    return (
        <StyledInnerBanner>
            <Container>
                <div className="swiperBtnOuter">
                    <div className="swiperBtnCtn">
                        <button className="swiperBtn" onClick={() => swiperRef.current?.slidePrev()}>
                        <svg className="arrow" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="14.5" stroke="white"/>
                        <g>
                        <path d="M10.7574 19.2426L19.2426 10.7573" stroke="white" stroke-miterlimit="16" stroke-linecap="round"/>
                        <path d="M10.7574 10.7574H19.2426V19.2427" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </button>
                        <button className="swiperBtn" onClick={() => swiperRef.current?.slideNext()}>
                        <svg className="arrow" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="14.5" stroke="white"/>
                        <g>
                        <path d="M10.7574 19.2426L19.2426 10.7573" stroke="white" stroke-miterlimit="16" stroke-linecap="round"/>
                        <path d="M10.7574 10.7574H19.2426V19.2427" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </button>
                    </div>
                </div>  
            </Container>
            <div className="swiperCtn">
                <Swiper 
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Autoplay,EffectCreative,Navigation]}
                    effect={'creative'}
                    creativeEffect={{
                        prev:{
                            translate:["-100%",0,0]
                        },
                        next: {
                            translate:["100%",0,0]
                        }
                    }}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{
                        delay:3000,
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
                                    <Container>
                                    <div className="bannerTitleCtn">
                                        <Title text={content.title} />
                                    </div>
                                    </Container>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </StyledInnerBanner>
    );
};

const StyledInnerBanner = styled.section`
    height:100vh;
    position:relative;
    .swiperBtnOuter {
        position: absolute;
        top:90%;
        left:3%;
        z-index:999;
    }

    .swiperBtnCtn {
        display:flex;
        align-items: center;
        gap:15px;
        .swiperBtn {
            padding:0;
            margin:0;
            position:relative;
            display:flex;
            justify-content: center;
            align-items: center;
            border:none;
            height:35px;
            width:35px;
            background-color: transparent;
            transition: background-color 300ms ease-in-out;
            .arrow {
                height:100%;
                width:100%;
                fill:none; 
                stroke:#FFFF;
            }
            &::after {
                content:'';
                position:absolute;
                z-index:-1;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color: #F27A21;
                border-radius: 50%;
                transform:scale(0);
                transform-origin: center;
                transition: transform 300ms ease-in-out;
            }
            &:hover {
                &::after {
                    transform:scale(1);
                }
                .arrow {
                    opacity:1;
                    circle {
                        stroke:transparent;
                    }
                    path {
                        stroke: #FFFF;
                    }
                }
            }
        }
        .swiperBtn:first-of-type {
            transform:rotate(-135deg);
        }
        .swiperBtn:last-of-type {
            transform:rotate(45deg);
        }
    }
    .bannerTitleCtn {
        position:absolute;
        height:100vh;
        color:white;
        margin:auto;
        width:90%;
    }
    .bannerTitle {
        position:absolute;
        bottom: 120px;
        font-size:48px;
        transform: translateX(0%);
        transition: transform 1500ms 100ms cubic-bezier(.59,0,.54,.99);
        .bannerLastWord {
            font-weight: 800;
        }
    }
    .swiperCtn {
        position:absolute;
        width:100%;
        height:100%;
        left:0;
    }
    .customTransition {
        height:100vh;
        .swiper-wrapper {
            transition-timing-function: cubic-bezier(.59,0,.54,.99);
        }
        .swiper-slide {
            border:none;
        }
           
        .swiper-slide-next {
            .bannerTitle {
                transform:translateX(-1000px);
            }
        }
    }
    @media screen and (min-width:768px) {
        .swiperBtnOuter {
            position:absolute;
            left:82%;
        }
    }
    @media screen and (min-width:1024px){
        .swiperBtnOuter {
            position:absolute;
            left:87%;
            top:82%;
        }
    }

`;
