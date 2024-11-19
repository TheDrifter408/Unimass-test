"use client";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Img } from "../Img";
import MyButton from "../MyButton";

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

const linksFooter = [
    {
        id:1,
        title:"Address",
        text:"House 04, Road 28(Old) 15(New), Dhanmondi, Dhaka 1209"
    },
    {
        id:2,
        title:"Call",
        text:"01755500115-7"
    },
    {
        id:3,
        title:"Email",
        text:"info@unimassbd.com"
    },
    {
        id:4,
        title:"",
        text:""
    },
]

export default function DesktopMenu({ isOpen, handleClick }){
    return(
        <StyledMenuContainer isOpen={isOpen}>
            <Container>
                {/* Navigation Header */}
                <Row>
                    <Col>
                        <div className="headerCtn">
                            <Img src="/images/static/UniMassLogo.svg" height={'80px'} width={"113px"} left={'30px'} top={'10px'} />
                            <MyButton handleClick={handleClick} classNames="menuButton">
                                <Img src="/images/static/CloseIcon.svg" height={40} width={40} top={'0%'} left={'0%'} />
                            </MyButton>
                        </div>
                    </Col>
                </Row>
                {/* Navigation Body */}
                <Row>
                    {
                        linksBody.map((link) => (
                            <Col key={link.id}>
                                <div className="columnCtn">
                                    <h2 className="title">{link.title}</h2>
                                    <nav className="columnBody">
                                        <ul>
                                            {
                                                link.children.map((child) => (
                                                    <li key={child.id}>
                                                        <a href="">{child.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
                {/* Navigation Footer */}
                <Row>
                    {
                        linksFooter.map((link) => (
                            <Col key={link.id}>
                            <div className="columnCtn">
                                <h2 className="title">{link.title}</h2>
                                <p>{link.text}</p>
                            </div>
                            </Col>
                        ))
                    }
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
        </StyledMenuContainer>
    )
}

const StyledMenuContainer = styled.div`
    position:absolute;
    display:none;
    height:100vh;
    width:100%;
    top:0;
    transform:${(props) => props.isOpen ? 'translate3d(0px,0px,0px)' : 'translate3d(0px,-100%, 0px)'};
    transition: transform 700ms ease-in-out;
    background: #3D342D;
    .container {
        position:relative;
        height:100%;
    }
    .row:last-of-type {
        position:absolute;
        width:100%;
        left:0;
        bottom:40px;
    }
    
    .headerCtn {
        height:110px;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        display:flex;
        align-items: center;
        justify-content: end;
    }

    .socialCtn {
        margin-top:20px;
        display:flex;
        align-items: center;
        gap:10px;
        .socialIcon {
            position:relative;
            border:none;
            background:none;
        }
    }

    .columnCtn {
        margin-top:30px;
        font-size:14px;
        color:white;
        
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
    @media screen and (min-width:768px) {
        display:block;
    }
`
