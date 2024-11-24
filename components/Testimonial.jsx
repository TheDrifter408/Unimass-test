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
                    <Col>
                        <h1>Customer Testimonials</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="imgCtnWrapper">
                        <div className="imgCtn">
                            <Image className="img" src="/images/static/testimonial.avif" alt="" width={800} height={800} />
                        </div>
                        
                    </div>
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
        }
        .img {
            width:100%;
            height:100%;
        }
    }
`;