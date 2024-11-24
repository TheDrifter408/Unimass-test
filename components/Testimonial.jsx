"use client";

import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { Img } from "./Img";
import Image from "next/image";

export default function Testimonials(){
    return (
        <StyledSection>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1>Customer Testimonials</h1>
                    </Col>
                    <Col>
                        <div className="imgCtnWrapper">
                            <div className="imgCtn">
                                <Image className="img" src="/images/static/testimonial.avif" alt="" width={800} height={800} />
                                <div className="iconCtn">
                                    <svg className="icon" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="34.5" stroke="white"/>
                                        <circle cx="3" cy="3" r="2.5" transform="matrix(1 0 0 -1 32 38)" stroke="#F27A21"/>
                                        <path d="M47 33.2679C48.3333 34.0378 48.3333 35.9623 47 36.7321L30.5 46.2583C29.1667 47.0281 27.5 46.0659 27.5 44.5263L27.5 25.4737C27.5 23.9341 29.1667 22.9719 30.5 23.7417L47 33.2679Z" fill="white"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    )
};

const StyledSection = styled.section`
    position:relative;
    min-height:100vh;
    padding-block: 120px;
    background-color: rgb(233,233,233);
    h1 {
        text-align: center;
        margin-block: 30px;
        font-weight: 800;
    }
    .imgCtnWrapper {
        width:100%;
        height:100%;
        .imgCtn {
            width:100%;
            height:100%;
            position:relative;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        .img {
            width:100%;
            height:100%;
        }
        .iconCtn {
            position:absolute;
            .icon {
                fill: transparent;
                transition: fill 500ms ease-in-out;
            }
            &:hover {
                .icon {
                    fill: #F27A21;
                }
            }
        }
    }
`;