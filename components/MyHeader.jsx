'use client';
import styled from "styled-components";
import { Container,Row,Col } from "react-bootstrap";
import { Img } from "./Img";
import { useState, useEffect } from 'react';
import DesktopMenu from "./MyMenu/MenuDesktop";
import MenuMobile from "./MyMenu/MenuMobile";
import MyButton from "./MyButton";

export default function MyHeader(){

    const [isOpen,setOpen] = useState(false);
    const [headerState, setHeaderState] = useState({
        initialVal: 0,
        translateUp:false
    });

    function handleClick() {
        setOpen(!isOpen);
    } 

    function handleScroll(){
        let currentScroll;
        if(window){
            currentScroll = window.scrollY;
        }
        setHeaderState({
            ...headerState,
            translateUp: currentScroll > headerState.initialVal
        })
        
    }

    useEffect(() => {
        if(window){
            window.addEventListener('scroll',handleScroll);
        }
        return () => window.removeEventListener('scroll',handleScroll);
        

    },[headerState])



    return(
        <StyledSection headerTop={headerState.translateUp}>
            <header className="header">
                <Container>
                    <Row> 
                    <Col>
                        <div className="ctnDesktop">
                            <Img srcSm="/images/static/UniMassLogoMobile.svg" src="/images/static/UniMassLogo.svg" height={'80px'} width={"113px"} left={'30px'} top={'10px'} />
                            <div className="menuCtn">
                                <nav className="menuOuter">
                                    <ul className="menuInner">
                                        <li>Property</li>
                                        <li>Services</li>
                                        <li>Contact</li>
                                    </ul>
                                </nav>
                                <button onClick={handleClick} className="menuButton">
                                    <Img src="/images/static/MenuIcon.svg" height={'40px'} width={'40px'} top={'0%'} left={'0%'} />
                                </button>
                            </div>
                        </div>
                        <div className="ctnMobile">
                            <div className="menuCtn">
                                <Img src="/images/static/UniMassLogoMobile.svg" height={"25px"} width={"138px"} left={'0px'} top={'35%'} bottom={'0px'} />
                                <MyButton handleClick={handleClick} classNames="menuButton">
                                    <Img src="/images/static/MenuIcon.svg" height={40} width={40} top={'0%'} left={'0%'} />
                                </MyButton>
                            </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
                <MenuMobile isOpen={isOpen} handleClick={handleClick} />
                <DesktopMenu isOpen={isOpen} handleClick={handleClick} />
            </header>
        </StyledSection>
        
    )   
} 

const StyledSection = styled.section`
    background: transparent;
    position:fixed;
    color:white;
    z-index:10;
    left:0;
    top: 0;
    width:100%;
    height: 110px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    transform: ${(props) => props.headerTop ? `translate3d(0px,-100%,0px)` : 'translate3d(0px,0px,0px)'};
    transition: transform 500ms ease-in-out;
    
    .menuButton {
        position: relative;
        height:45px;
        width:45px;
        background:none;
        border:none;
    }
    
    .menuCtn {
        display:flex;
        align-items: center;
        height:110px;
    }
    .ctnDesktop {
        display:none;
        
        .menuCtn {
            justify-content: end;
            gap:30px;
        .menuInner {
            display:flex;
            align-items: center;
            gap: 30px;
        }
    }
    }
    .ctnMobile {
        position:relative;
        .imgCtn {
            position:relative;
        }
        .menuCtn {
            justify-content: end;
        }
    }
    @media screen and (min-width: 768px) {
        .ctnDesktop {
            display:block;
        }
        .ctnMobile {
            display:none;
        }
    }
`

