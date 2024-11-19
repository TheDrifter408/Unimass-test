'use client';

import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Swiper,SwiperSlide } from 'swiper/react';
import MyButton from './MyButton';
import { Img } from './Img';
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';
import { useRef } from 'react';

const sliders = [
    {
        id:1,
        title:"West & street (Beside Central Road, Dhanmondi)",
        imgSrc: "/images/static/Masum-Orchid-1.jpg"
    },
    {
        id:2,
        title:"Uttara Extension",
        imgSrc: "/images/static/Rakin-City-1.jpg"
    },
    {
        id:3,
        title:"Bashundhara R/A (Block C)",
        imgSrc: "/images/static/DLVD-1.jpg"
    },
    {
        id:4,
        title:"Lalmatia (Block A)",
        imgSrc: "/images/static/Criterion-Zen-1.jpg"
    },
]

export default function FeaturedProperties(){

    const swiperRef = useRef(null);

    function handlePrev(){
        if(swiperRef.current){
            swiperRef.current?.slidePrev();
        }
        return;
    }
    
    function handleNext(){
        if(swiperRef.current){
            swiperRef.current.slideNext();
        }
        return;
    }

    return(
        <StyledSection>
            <Container>
                <div className="swiperTop">
                    <h1 className="swiperTitle">Featured Properties</h1>
                    <div className="swiperBtnCtn">
                        <MyButton classNames="swiperBtn" handleClick={handlePrev}>
                        <svg className="arrow" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15" cy="15" r="14.5" />
                        <g >
                        <path d="M10.7574 19.2426L19.2426 10.7573"  stroke-miterlimit="16" stroke-linecap="round"/>
                        <path d="M10.7574 10.7574H19.2426V19.2427"  stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </MyButton>
                        <MyButton classNames="swiperBtn" handleClick={handleNext}>
                        <svg className="arrow" width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <circle  cx="15" cy="15" r="14.5" />
                        <g >
                        <path d="M10.7574 19.2426L19.2426 10.7573"  stroke-miterlimit="16" stroke-linecap="round"/>
                        <path d="M10.7574 10.7574H19.2426V19.2427"  stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>
                        </MyButton>
                    </div>
                </div>
                <Swiper onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Autoplay,Navigation]}
                        
                        spaceBetween={25}
                        slidesPerView={3}
                        autoplay={{
                            delay:3000,
                        }}
                        loop={true}
                        className="customTransition"
                        speed={2000}>
                    {
                        sliders.map((slider) => (
                            <SwiperSlide key={slider.id}>
                                <div className="sliderContent">
                                    <Img src={slider.imgSrc} width="100%" height="100%" position={"absolute"} />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    background-color:white;
    padding-block:120px;
    
    .swiperTop {
        display:flex;
        justify-content: space-between;
        margin-bottom: 40px;
        .swiperTitle {
            font-weight: 800;
        }
        .swiperBtnCtn {
            display:flex;
            align-items: center;
            bottom: 20px;
            gap:15px;
        }
        .swiperBtn:first-of-type {
            transform:rotate(-135deg);
        }
        .swiperBtn:last-of-type {
            transform:rotate(45deg);
        }
        .swiperBtn {
            padding:0;
            margin:0;
            position:relative;
            display:flex;
            justify-content: center;
            align-items: center;
            border:none;
            height:45px;
            width:45px;
            background-color: transparent;
            transition: background-color 300ms ease-in-out;
            .arrow {
                height:100%;
                width:100%;
                fill:none; 
                stroke: #000;
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
    }
    
    .customTransition {
        height:50vh; 
        .swiper-wrapper {
            transition-timing-function: cubic-bezier(.59,0,.54,.99);
        }
        .swiper-slide {
            border:none;
        }
        .swiperContent {
            position:relative;
            height: 400px;
            width:400px;
        }
    }
`