'use client';

import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Contact(){
    return(
        <StyledSection>
            <Container fluid="xs">
                <Row>
                    <Col className="p-0">
                        <div className="formRight">
                            <div className="formRightInner">
                                <h1>Stay connected with us!</h1>
                                <h4>Get all the latest updates easily</h4>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-0">
                        <div className="formLeft">
                            <div className="formLeftInner">
                                <form>
                                    <input type="text" placeholder="Name*" />
                                    <input type="email" placeholder="Email*" />
                                    <button>Connect</button>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>        
    )
}

const StyledSection = styled.section`
    .formRight {
        color:white;
        padding-block: 30px;
        background-color:rgb(26,71,148);
        .formRightInner {
            height:100%;
            display:block;
            margin-inline:auto;
            width:fit-content;
        }
    }
    .formLeft {
        color:white;
        background-color: rgb(82,95,110);
        padding-block:30px;
        height:100%;
        .formLeftInner {
            display:block;
            font-size:18px;
            margin-block: 10px;
            form {
                display:flex;
                gap: 10px;
                padding-left:20px;
                input {
                    background-color:transparent;
                    border-color: rgba(255, 255, 255,0.8);
                    border-top:0;
                    border-inline: 0;
                    padding-bottom: 15px;
                    &:focus {
                        outline:none;
                    }
                }
                button {
                    border:1px solid rgba(255, 255, 255,0.8);
                    color:white;
                    background:transparent;
                    border-radius: 20px;
                    padding: 10px 20px;
                }
            }
        }
    }
`;
