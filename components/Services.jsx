'use client';

import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Img } from "./Img";

const services = [
    {   
        id:1,
        title:"Interior Solutions",
        imageSrc: "/images/static/InteriorSolutions.svg",
    },
    {   
        id:2,
        title:"Re-sale of Property",
        imageSrc: "/images/static/propertySolutions.svg",
    },
    {   
        id:3,
        title:"Building Constructions",
        imageSrc: "/images/static/buildingConstructions.svg",
    },
    {   
        id:4,
        title:"Renovations and Modifications",
        imageSrc: "/images/static/renovationsModifications.svg",
    },
    {   
        id:5,
        title:"Legal and Logistics Services",
        imageSrc: "/images/static/legalLogistics.svg",
    },
    {   
        id:6,
        title:"Design Consultancy Services",
        imageSrc: "/images/static/consultancyService.svg",
    },
]



export default function Services(){
    return(
        <StyledSection>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3}>
                    {
                        services.map((service) => (
                            <Col key={service.id}>
                                <a href="" className="cardCtnOuter">
                                    <div className="cardCtn">
                                        <div className="cardCtnBody">
                                            <div className="cardCtnImage">
                                                <Img width={'100%'} height={'100%'} src={service.imageSrc} alt={service.title} />
                                            </div>
                                            <button className="cardBtn">
                                                <svg className="arrow" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle opacity="0.5" cx="15" cy="15" r="14.5" stroke="white"/>
                                                <g opacity="0.5">
                                                <path d="M10.7574 19.2426L19.2426 10.7573" stroke="white" stroke-miterlimit="16" stroke-linecap="round"/>
                                                <path d="M10.7574 10.7574H19.2426V19.2427" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="cardText">{service.title}</p>
                                    </div>
                                </a>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </StyledSection>
    )

}

const StyledSection = styled.section`
    background-image: url("/images/static/services_background.jpg");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display:flex;
    justify-content: center;
    align-items: center;
    padding-block: 60px;
    color:white;

    .cardCtnOuter {
        position:relative;
        overflow:hidden;
        text-decoration: none;
        color:white;
    }
    

    .cardCtn {
        border: 1px solid rgba(255,255,255,0.5);
        padding:30px;
        margin-bottom: 60px;
        background-image: linear-gradient(#F27A21 0 0);
        background-repeat: no-repeat;
        background-size: 100% 0%;
        transition: background-size 300ms ease-in-out;
        background-position: bottom;
        color:white; 

        .cardText {
            font-weight: 500;
        }

        .cardCtnBody {
            display:flex;
            justify-content: space-between;
            align-items:start;
            margin-bottom: 50px;
        }

        .cardCtnImage {
            position:relative;
            width: 75px;
            height:75px;
        }

        .cardBtn {
            padding:0;
            margin:0;
            position: relative;
            height:30px;
            width:30px;
            border-radius: 50%;
            background-color: transparent;
            transition: background-color 300ms ease-in-out;
            border:none;
            &::after {
                content:'';
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background-color: white;
                border-radius: 50%;
                transform:scale(0);
                transform-origin: center;
                transition: transform 300ms ease-in-out;
            }
            .arrow {
                position:absolute;
                top:0;
                left:0;
                z-index: 1;
                transform: rotate(0deg);
                transition: transform 300ms ease-in-out;
                height:100%;
                width:100%;
                fill:none; 
            }
        }

        &:hover {
            background-size: 100% 100%;
            .cardBtn {
                &::after {
                    transform:scale(1);
                }
                         
                .arrow {
                    transform: rotate(45deg);
                    opacity:1;
                    path {
                        stroke: #F27A21;
                    }

                }
            }
        }
    }
`