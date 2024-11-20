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
            <Container className="h-100">
                <Row className="h-100 justify-content-between"> 
                    { /* Desktop View */ }
                        {/* Desktop Logo */}
                    <Col md={6} className="d-none d-md-block">
                        <div className="logoCtn">
                            <Img src="/images/static/UniMassLogo.svg" height={'80px'} width={"113px"} left={'0px'} top={'10px'} />
                        </div>
                    </Col>
                        {/* Mobile Logo */}
                    <Col xs={4} sm={4} className="d-md-none">
                        <div className="logoCtn">
                            <Img src="/images/static/UniMassLogoMobile.svg" height={'25px'} width={"138px"} left={'0px'} top={'40px'} />
                        </div>
                    </Col>
                    <Col md={6} className="d-none d-md-block">
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
                    </Col>
                    { /* Mobile View */}
                    <Col xs={6} sm={6} className="d-md-none d-flex align-items-center justify-content-end">
                        <MyButton handleClick={handleClick} classNames="menuButton">
                            <Img src="/images/static/MenuIcon.svg" height={40} width={40} top={'0%'} left={'0%'} />
                        </MyButton>
                    </Col> 
                </Row>
            </Container>
            <MenuMobile isOpen={isOpen} handleClick={handleClick} />
            <DesktopMenu isOpen={isOpen} handleClick={handleClick} />
        </StyledSection>
        
    )   
} 

const StyledSection = styled.section`
    background: transparent;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    width:100%;
    color:white;
    height: 110px;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    transform: ${(props) => props.headerTop ? `translate3d(0px,-100%,0px)` : 'translate3d(0px,0px,0px)'};
    transition: transform 500ms ease-in-out;
    .header {
        position:relative;
        height:100%;
    }
    .menuButton {
        position: relative;
        height:45px;
        width:45px;
        background:none;
        border:none;
    }
    
    .menuCtn {
        display:flex;
        align-items:center;
        justify-content:end;
        gap:30px;
        height:110px;
        .menuInner {
            display:flex;
            align-items: center;
            gap: 30px;
        }
    }
    
    .logoCtn {
        position:relative;
        height: 45px;
        width:138px;
    }

    .ctnMobile {
        position:relative;
        width:100%;
        .imgCtn {
            position:relative;
        }
        .menuCtn {
            justify-content: end;
        }
    }
    
`

