'use client';
import styled from "styled-components";
import { Img } from "./Img";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";

const linksBody = [
    {
        id:1,
        title:"About Us",
        children:[
            {
                id:1,
                text:"Who We Are"
            },
            {
                id:2,
                text:"Board of Director"
            },
        ]
    },
    {
        id:2,
        title:"Property Solutions",
        children:[
            {
                id:1,
                text:"Rent"
            },
            {
                id:2,
                text:"Buy"
            },
            {
                id:3,
                text:"Residential"
            },
            {
                id:4,
                text:"Commercial"
            },
        ]
    },
    {
        id:3,
        title:"Service",
        children:[
            {
                id:1,
                text:"Interior Solutions"
            },
            {
                id:2,
                text:"Re-sale of Property"
            },
            {
                id:3,
                text:"Renovations & Modifications"
            },
            {
                id:4,
                text:"Legal & Logistics Services"
            },
            {
                id:5,
                text:"Design Consultancy Services"
            },
            {
                id:6,
                text:"Rental Services"
            },
            {
                id:7,
                text:"Building Management"
            },
        ]
    },
    {
        id:4,
        title:"Media Center",
        children:[
            {
                id:1,
                text:"News"
            },
            {
                id:2,
                text:"Events"
            },
            {
                id:3,
                text:"Blogs"
            },
        ]
    },
    {
        id:5,
        title:"Navigation",
        children:[
            {
                id:1,
                text:"Career"
            },
            {
                id:2,
                text:"Contact Us"
            }
        ]
    }
]


export default function MyFooter(){
    const [date,setDate] = useState(new Date().getFullYear().toString());
    
    function newDate(){
        const newDate = new Date().getFullYear().toString();
        setDate(newDate);
    }

    useEffect(() => {
        newDate();
    },[date]);

    return(
        <StyledFooter>
            <Container>
                <Row> 
                    <Col sm={5} md={3}>
                        <div className="logoCtn">
                            <div className="logoCtnOuter">
                                <Img src="/images/static/UniMassFullLogo.svg" height="100px" width="140px" top={"0px"} left={"0px"} />
                            </div>
                            <div>
                                <p>+880 41  020 276</p>
                            </div>
                            <div>
                                <p>info@unimassbd.com</p>
                            </div>
                        </div>                        
                    </Col>
                    <Col sm={8} md={2}>
                        <div>
                            <div className="columnCtn">
                                <h2 className="title">About</h2>
                                <nav className="columnBody">
                                    <ul>
                                        <li>
                                            <a href="">Who We Are</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Board of Directors
                                            </a>
                                        </li>
                                    </ul>    
                                </nav>
                            </div>
                            <div className="columnCtn">
                            <h2 className="title">Media Center</h2>
                                <nav className="columnBody">
                                    <ul>
                                        <li>
                                            <a href="">News</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Events
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Blogs</a>
                                        </li>
                                    </ul>    
                                </nav>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} md={2}>
                        <div>
                            <div className="columnCtn">
                                <h2 className="title">Apartment Sale &amp; Rent</h2>
                                <nav className="columnBody">
                                    <ul>
                                        <li>
                                            <a href="">Rent</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Buy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Residential</a>
                                        </li>
                                        <li><a href="">Commercial</a></li>
                                    </ul>    
                                </nav>
                            </div>
                            <div className="columnCtn">
                            <h2 className="title">Navigation</h2>
                                <nav className="columnBody">
                                    <ul>
                                        <li>
                                            <a href="">Career</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>    
                                </nav>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={2}>
                        <div>
                        <div className="columnCtn">
                                <h2 className="title">Service</h2>
                                <nav className="columnBody">
                                    <ul>
                                        <li>
                                            <a href="">Interior Solutions</a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Property Solutions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">Legal &amp; Logistics Service</a>
                                        </li>
                                        <li><a href="">Renovations &amp; Modifications</a></li>
                                        <li><a href="">Building Constructions</a></li>
                                        <li><a href="">Consultancy Service</a></li>
                                    </ul>    
                                </nav>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <div className="">
                            <ul className="socialCtn">
                                <li className="socialIcon">
                                    <a href="" className="">
                                        <Img src="/images/static/socials/Facebook.svg" top="0" left="0" height="30px" width="30px" />
                                    </a>
                                </li>
                                <li className="socialIcon">
                                    <a href="" className="">
                                        <Img src="/images/static/socials/Instagram.svg" top="0" left="0" height="30px" width="30px" />
                                    </a>
                                </li>
                                <li className="socialIcon">
                                    <a href="" className="">
                                        <Img src="/images/static/socials/Linkedin.svg" top="0" left="0" height="30px" width="30px" />
                                    </a>
                                </li>
                                <li className="socialIcon">
                                    <a href="" className="">
                                        <Img src="/images/static/socials/Youtube.svg" top="0" left="0" height="30px" width="30px" />
                                    </a>
                                </li>
                                <li className="socialIcon">
                                    <a href="" className="">
                                        <Img src="/images/static/socials/Twitter.svg" top="0" left="0" height="30px" width="30px" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row sm={1} md={2}>
                    <Col>
                        <div>
                            <p>&copy;{date} Unimass Property Solutions Ltd - All rights reserved</p>
                        </div>
                    </Col>
                    <Col>
                        <Link className="link" href="https://dcastalia.com/" target="_blank">Designed &amp; Developed by Dcastalia</Link>
                    </Col>
                </Row>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color:#3D342D;
    z-index:20;
    width:100%;
    padding-top:120px;
    padding-bottom: 60px;
    color:white; 

    .link {
        color:white;
    }

    .row:first-of-type {
        border-bottom: 1px solid rgba(255,255,255,0.5);
        padding-bottom: 50px;
    }

    .row:last-of-type {
        padding-top:20px;
        color:white; 
    }

    .logoCtn {
        margin-top:30px;
        display:grid;
        justify-content: center;
        color:white;
        gap:30px;
        font-size:18px;
        font-weight: 800;
    }

    .socialCtn {
        margin-top:30px;
        width:100%;
        height:100%;
        display:flex;
        flex-direction: row;
        align-items: end;
    }

    .socialIcon {
        position:relative;
        border:none;
        background:none;
        width:40px;
        height:40px;
    }
    

    .logoCtnOuter {
        position:relative;
        height:100px;
    }

    .columnCtn {
        margin-top:30px;
        font-size:14px;
        color:white;
        a {
            color:white;
        }
        .title {
            font-size:12px;
            font-weight: 600;
            color: rgba(255,255,255,0.5);
            margin-block: 20px;
        }
        
        .columnBody {
            text-decoration: none;
            color:white;
            ul {
                display: grid;
                gap: 10px;
            }
        }
    }
       
    @media screen and (min-width: 767px) {
        .socialCtn {
            flex-direction: column;
        }
        .row:last-of-type {
            .col:last-of-type {
                text-align:right;
            }
        }
    }

`