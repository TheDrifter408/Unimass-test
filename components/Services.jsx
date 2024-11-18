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
                                                <Img src="/images/static/serviceArrow.svg" width="30px" height="30px" left="0px" top="0px" />
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
        transition: background-size 500ms ease-in-out;
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
            position: relative;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            border:none;
            background:none;
            transform: rotate(0deg);
            background-image: linear-gradient(#FFFF 0 0);
            background-repeat: no-repeat;
            background-size: 100% 0%; 
            transition: transform 500ms ease-in-out, background-size 500ms ease-in-out;

            .global-image {
                z-index: 10;
            }
        }

        &:hover {            
            background-size: 100% 100%;
            .cardBtn {
                transform: rotate(45deg);
                background-size: 100% 100%;
                background-position: center;
            }
        }
    }


`