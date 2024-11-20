'use client';

import { Accordion, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Img } from "../Img";
import { useState } from "react";
import Image from "next/image";
import MyButton from "../MyButton";

const links = [
    {
        id:1,
        title:"About us",
        isActive:false,
        children:[
            "Who We Are",
            "Board of Directors"
        ]
    },
    {
        id:2,
        title:"Projects",
        isActive:false,
        children:[
            "Rent",
            "Buy",
            "Residential",
            "Commercial"
        ]
    },
    {
        id:3,
        title:"Service",
        isActive:false,
        children:[
            "Interior Solutions",
            "Re-sale of Property",
            "Renovations & Modifications",
            "Legal & Logistics Services",
            "Design Consultancy Services",
            "Rental Services",
            "Building Management"
        ]
    },
    {
        id:4,
        title:"Media Center",
        isActive:false,
        children:[
            "Event",
            "News",
            "Blogs",
        ]
    },
    {
        id:5,
        title:"Career",
    },
    {
        id:6,
        title:"Contact Us"
    },
    {
        id:7,
        title:"Begin Your Journey"
    }
];


export default function MenuMobile({ isOpen, handleClick }){
    return(
        <StyledSection isOpen={isOpen}>
            <Container>
                <Row>
                    <Col>
                        <div className="menuHead">
                            <div className="logoCtn">
                            <Img src="/images/static/UnimassLogoMobile.svg" height={"25px"} width={"138px"} left={'0px'} top={'5px'} bottom={'0px'} />
                            </div>
                            <MyButton handleClick={handleClick} classNames="menuButton">
                                <Img src="/images/static/MenuIcon.svg" height={"40px"} width={"40px"} top={'0%'} left={'0%'} />
                            </MyButton>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <div className="navCtn">
                        <nav>
                            {
                                links.map((link) => (
                                    <Accordion key={link.id} className="navItemCtn">
                                        <Accordion.Item eventKey={link.id}>
                                        <Accordion.Header>
                                            {link.title} 
                                            { 
                                            link.children ? 
                                                <Image width={20} height={20} src="/images/static/dropDown.svg"  alt="dropdown" /> : 
                                                <></>
                                            }   
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {
                                                link.children ?
                                                <ul>
                                                    {
                                                        link.children.map((child,idx) => (
                                                            <li key={idx}>
                                                                <a href="">{child}
                                                                </a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul> :
                                                <></>
                                            }
                                        </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                ))
                            }
                        </nav>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="address">
                            <h4 className="addressTitle">Address</h4>
                            <p className="addressContent">House 04, Road 28(Old) 15(New), Dhanmondi, Dhaka 1209</p>
                        </div>
                        <div className="address">
                            <h4 className="addressTitle">Call</h4>
                            <p className="addressContent">+8802 41020276-8</p>
                        </div>
                        <div className="address">
                            <h4 className="addressTitle">Email</h4>
                            <p className="addressContent">info@unimassbd.com</p>
                        </div>                              
                    </Col>
                    <Col>
                    <div className="socialCtn">
                            <div className="socialIcon">
                                <Img src="/images/static/socials/Facebook.svg" height={'30px'} width={'30px'} top={'0%'} left={'0%'} position="static" />
                            </div>
                            <div className="socialIcon">
                                <Img src="/images/static/socials/Instagram.svg" height={'30px'} width={'30px'} top={'0%'} left={'0%'} position="static" />
                            </div>
                            <div className="socialIcon">
                                <Img src="/images/static/socials/Linkedin.svg" height={'30px'} width={'30px'} top={'0%'} left={'0%'} position="static" />
                            </div>
                            <div className="socialIcon">
                                <Img src="/images/static/socials/Youtube.svg" height={'30px'} width={'30px'} top={'0%'} left={'0%'} position="static" />
                            </div>
                            <div className="socialIcon">
                                <Img src="/images/static/socials/Twitter.svg" height={'30px'} width={'30px'} top={'0%'} left={'0%'} position="static" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    )
}


const StyledSection = styled.section`
    position:absolute;
    display:flex;
    width:100%;
    transform:${(props) => props.isOpen ? 'translate3d(0px,0px,0px)' : 'translate3d(0px, -200%,0px)'};
    transition:transform 700ms ease-in-out;
    height:100vh;
    top:0;
    left:0;
    background-color: #3D342D;
    .menuHead {
        position:relative;
        display:flex;
        align-items: center;
        justify-content: space-between;
        height:110px;

        .logoCtn {
            position:relative;
            height: 45px;
            width:138px;
        }

        .menuButton {
            justify-self: end;
        }
    }

    .navCtn {
        margin-block: 30px;
    }

    .accordion-button {
        background:none;
        border-top:none;
        border-inline: none;
        color: rgba(233, 233, 233,0.8);
        font-size:20px;
        border-bottom: 1px solid rgba(233, 233, 233,0.2);
        margin-top:20px;
        padding-bottom: 20px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        width:100%;
        
        .global-image {
            width:20px;
            height:20px;
        }
        
        &[aria-expanded="true"] {
            border-bottom:none;
        }
    }

    .accordion-body {
        padding-block: 20px 5px;
        border-bottom: 1px solid rgba(233, 233, 233,0.2);
        li {
            margin-bottom: 15px;
            a {
                color:#E9E9E9;
            }
        }
    }   
    
    .address {
        margin-bottom: 20px;
        font-size:12px;
        .addressTitle {
            color:rgba(233, 233, 233,0.8);
            font-size:12px;
            font-weight: 800;
            margin-bottom:15px;
        }
    }
    .socialCtn {
        margin-top:20px;
        display:flex;
        flex-direction: column;
        align-items: end;
        gap:10px;
        .socialIcon {
            position:relative;
            border:none;
            background:none;
        }
    }
    @media screen and (min-width:768px) {
        display:none;
    }
`