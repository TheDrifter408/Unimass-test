'use client';

import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Swiper,SwiperSlide } from 'swiper/react';
import Select from 'react-select';
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
        type:"Commercial",
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

const filterOptions = [
    {
        id:1,
        options:[
            {
                id:1,
                value:"rent",
                label:"Rent"
            },
        ]
    },
    {
        id:2,
        options:[
            {
                id:1,
                value:"commercial",
                label:"Commercial"
            },
            {
                id:2,
                value:"residential",
                label:"Residential"
            },
        ]
    },
    {
        id:3,
        options:[
            {
                id:1,
                value:"1200-1500",
                label:"1200sqt - 1500sqt"
            },
            {
                id:2,
                value:"1500-1800",
                label:"1500sqt - 1800sqt"
            },
        ]
    },
    {
        id:4,
        options:[
            {
                id:1,
                value:"bashundhara",
                label:"Bashundhara"
            },
            {
                id:2,
                value:"dhanmondi",
                label:"Dhanmondi"
            },
            {
                id:3,
                value:"lalmatia",
                label:"Lalmatia"
            },
            {
                id:3,
                value:"uttara",
                label:"Uttara"
            },
        ]
    },
]


function Property({ imgSrc,area,title,type,district }){
    return (
        <div className="imgCtnOuter">
            <div className="imgInfo">
                <div className="imgIcon">
                    <Img src="/images/static/sizeIcon.svg" width="100%" height="100%" top="0px" left="0px" />
                </div>
                <div className="imgDetails">
                    <h4>Area</h4>
                    <p>{area}</p>
                </div>
            </div>
            <Link className="link" href="/">
            <Img src={imgSrc} width="100%" height="100%" alt="" top="0px" left="0px" position="absolute" objectFit={"contain"} />
            </Link>
            <div className="imgDescCtn">
                <div className="imgDesc">
                    <h2>Rent</h2>
                    <h4>{title}</h4>
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
            <Img src="/images/static/propertiesBg.svg" top="20%" left="55%" position="absolute" width="832px" height="832px" margin="" />
            <Container>
                <Row>
                    <Col xs={12}>
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
                    </Col>
                    <Col>
                        <Swiper onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                            }}
                            modules={[Autoplay,Navigation]}
                            breakpoints={{
                                320: {
                                    slidesPerView:1,
                                    spaceBetween:10
                                },
                                640: {
                                    slidesPerView:1,
                                    spaceBetween:10
                                },
                                768:{
                                    slidesPerView:1,
                                    spaceBetween:10
                                },
                                1024: {
                                    slidesPerView:2,
                                    spaceBetween:25
                                },
                                1440:{
                                    slidesPerView:3,
                                    spaceBetween:25
                                }
                            }}
                            spaceBetween={25}
                            slidesPerView={3}
                            autoplay={{
                                delay:3000,
                            }}
                            loop={true}
                            className="customTransition"
                            speed={2000}
                        >
                            {
                                sliders.map((slider) => (
                                    <SwiperSlide key={slider.id}>
                                        <Property imgSrc={slider.imgSrc} area={slider.area} title={slider.title} type={slider.type} district={slider.district} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <div className="propertyFilterCtn">
                            {
                                filterOptions.map((option) => (
                                    <Select className="reactSelectCtn" classNamePrefix='react-select' options={option.options} />
                                ))
                            }
                            <MyButton classNames="filterBtn">
                                Search
                            </MyButton>
                        
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    background-color: rgba(255, 255, 255, 0.863);
    padding-block:120px;
    min-height:100vh;
    position:relative;
    overflow:hidden;
    .propertyFilterCtn {
        margin-top: 70px;
        padding:30px;
        width:100%;
        display:flex;
        flex-wrap:wrap;
        align-items: center;
        gap:15px;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 40px 0px;
        border-radius:10px;
        background-color: white;
        .reactSelectCtn{
            width:100%;
        }
        .filterBtn {
            border:none;
            border-radius: 10px;
            padding: 10px 30px;
            display:block;
            position:relative;
            margin-inline:auto;
            background-color: rgb(0,94,158);
            color:white;
            z-index:0;
            &::after {
                content:'';
                position:absolute;
                border-radius: 20px;
                padding: 10px 30px;
                z-index:-1;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color: #F27A21;
                transform:scale(0);
                transition:transform 500ms ease-in-out;
            }
            &:hover {
                &::after {
                    transform:scale(1);
                }
            }
        }
    }
    
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
            display:flex;
            align-items: center;
            gap:10px;
            padding:15px;
            z-index:999;
            height:15%;
            width:100%;
            font-size:14px;
            color:white;
            opacity:1;
            transform: translateY(-100%);
            transition: transform 350ms ease-in-out, opacity 500ms ease-in-out;
            
            .imgIcon {
                position:relative;
                height:17px;
                width:16px;
            }
            .imgDetails {
                h4 {
                    font-size:12px;
                    font-weight: 800;
                }
                p {
                    font-size:12px;
                    font-weight: 800;
                }
            }
        }
        .imgDescCtn {
            position:absolute;
            bottom:0;
            height: auto;
            width:100%;
            left:0;
            color:white;
            background-image: linear-gradient(to top,rgba(0,0,0,0.8),rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 75%,rgba(0,0,0,0.0));
            .imgDesc {
                width: 50%;
                height:100%;
                padding-block:30px;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                gap:5px;
                margin-inline:20px;
                h1,h2 {
                    font-size:20px;
                }
                h4 {
                    font-weight:800;
                    word-wrap: break-word;
                }
                h2 {
                    font-size:12px;
                    background-color: #F27A21;
                    width:min-content;
                    padding: 5px 10px;
                    border-radius:20px;
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