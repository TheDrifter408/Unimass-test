'use client';

import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Img } from './Img';
import Image from 'next/image';

export default function AboutUs(){
    return(
        <StyledSection className='about_overview'>
            <Container>
                <Row>
                    <Col className='about_overview__left' xs={12} sm={12} md={6}>
                        <h2 className="aboutUsTitle">About Us</h2>
                        <h4 className="aboutUsTag">Unimass Property Solutions, a concern of Unimass Holdings Ltd., brings a legacy of excellence rooted in the construction industry since the early 1990s, expanding into real estate development in 2010.</h4>
                        <p className="aboutUsPara">Over these decades, Unimass Holdings has built an unwavering reputation for delivering premium quality and creating luxurious living spaces that bring aspirations to life. Our talented team of architects, designers, engineers, and managers is dedicated to making dreams a reality, underpinned by values of transparency, honesty, and the highest ethical standards.</p>
                        <p className="aboutUsPara">In response to the growing demand for buying and selling ready and pre-owned apartments in Dhaka, we are proud to introduce Unimass Property Solutions as a trusted platform for property buyers and sellers. Recognizing the complexities of real estate transactions, we are committed to providing a seamless, hassle-free experience for all parties involved. Our experienced team goes above and beyond, offering comprehensive support at every stage of the property journey.</p>
                        <div>
                            <a href="" className="aboutUsBtn">
                                Explore 
                            </a>
                        </div>
                    </Col>
                    <Col  xs={12} sm={12} md={6}>
                        <div className="aboutusBg">
                            <Image src="/images/static/aboutUsBackground.png" alt="" width={800} height={800} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>    
    )
}

const StyledSection = styled.section`
    background-color: rgb(240, 240, 240);
    min-height:100vh;
    color:black;
    padding: 120px 0;
    
    .about_overview{
        &__left{
            padding-right: 80px;
        }
    }

    .col:last-of-type {
        border-left: 1px solid rgba(0, 0, 0, 1.0);
    }
    
    .aboutUsTitle {
        margin-bottom:30px;
        font-size: 28px;
        font-weight: 900;
    }
    .aboutUsTag {
        font-size:20px;
        margin-bottom: 30px;
    }
    .aboutUsPara {
        margin-bottom: 30px;
        text-overflow: ellipsis;
    }
    .aboutUsBtn {
        margin-block:20px;
        padding-inline: 32px;
        padding-block:16px;
        font-size:18px;
        border: 1px solid black;
        border-radius: 30px;
        color:black;
        text-decoration: none;

    }
    .aboutusBg {
        height:100%;
        width:100%;
    }

    @media screen and (min-width:768px) {
      
        .col:first-of-type {
        }
        .col:last-of-type {
            border-left: 1px solid rgba(0,0,0,0.5);

        }
    }

`

