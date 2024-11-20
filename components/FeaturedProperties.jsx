'use client';

import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Swiper,SwiperSlide } from 'swiper/react';
import MyButton from './MyButton';
import { Img } from './Img';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import Link from 'next/link';

const sliders = [
    {
        id:1,
        title:"West & street (Beside Central Road, Dhanmondi)",
        imgSrc: "/images/static/Masum-Orchid-1.jpg",
        area: "1200sqt-1500sqt",
        type:"Residential",
        district:"Dhanmondi"
    },
    {
        id:2,
        title:"Uttara Extension",
        imgSrc: "/images/static/Rakin-City-1.jpg",
        area:"1500sqt-1800sqt",
        type:"Residential",
        district:"Uttara"
    },
    {
        id:3,
        title:"Bashundhara R/A (Block C)",
        imgSrc: "/images/static/DLVD-1.jpg",
        area:"1500sqt-1800sqt",
        type:"Residential",
        district:"Bashundhara"
    },
    {
        id:4,
        title:"Lalmatia (Block A)",
        imgSrc: "/images/static/Criterion-Zen-1.jpg",
        area:"1500sqt-1800sqt",
        type:"Residential",
        district:"Lalmatia"
    },
]

function Property({ imgSrc,area,title,type,district }){
    return (
        <div className="imgCtnOuter">
            <div className="imgInfo">
                <h4>Area</h4>
                <p>{area}</p>
            </div>
            <Link className="link" href="/">
            <Img src={imgSrc} width="100%" height="100%" alt="" top="0px" left="0px" position="absolute" />
            </Link>
            <div className="imgDescCtn">
                <div className="imgDesc">
                    <h1>{title}</h1>
                    <p>{type} . {district}</p>
                </div>
            </div>
        </div>
    )
}

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
                                <Property imgSrc={slider.imgSrc} area={slider.area} title={slider.title} type={slider.type} district={slider.district} />
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
    height:100vh;
    .swiperTop {
        display:flex;
        justify-content: space-between;
        margin-bottom: 50px;
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
        .swiper-wrapper {
            transition-timing-function: cubic-bezier(.59,0,.54,.99);
        }
        .swiper-slide {
            border:none;
        }
    }

    .imgCtnOuter {
        position:relative;
        min-width:500px;
        min-height:500px;
        overflow:hidden;
        color:black;
        &::after {
            content:'';
            position:absolute;
            height:100%;
            width:100%;
            transform: translateY(100%);
            transition: transform 250ms ease-in-out;
            background-color: rgba(0,0,0,0.5);
        }
        .global-image {
            transform: scale(1);
            transition: transform 500ms ease-in-out;
        }
        .imgInfo {
            position:absolute;
            padding:30px;
            z-index:999;
            height:200px;
            width:200px;
            font-size:14px;
            color:white;
            opacity:1;
            transform: translateY(-100%);
            transition: transform 350ms ease-in-out, opacity 500ms ease-in-out;
            h4 {
                font-size:14px;
                font-weight: 800;
            }
        }
        .imgDescCtn {
            position:absolute;
            bottom:0;
            height: 30%;
            width:100%;
            left:0;
            color:white;
            background-image: linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 75%,rgba(0,0,0,0.0));
            .imgDesc {
                width: 80%;
                margin-inline:auto;
                h1 {
                    font-size:24px;
                    font-weight:800;
                }
            }
        }
        .imgCtnInner {
            position:relative;
        }
        .link {
            position:absolute;
            min-height:100%;
            min-width:100%;
            
        }
        &:hover {
            .global-image {
                transform:scale(1.1);
            }
            &::after {
                transform:translateY(0);
            }
            .imgInfo {
                transform:translateY(0);
                opacity:1;
            }
        }
    }
`