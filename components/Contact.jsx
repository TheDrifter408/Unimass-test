'use client';

import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export default function Contact(){
    return(
        <StyledSection>
            <Container fluid>
                <Row>
                    <Col className="p-0" xs={12} md={5}>
                        <div className="formRight">
                            <div className="formRightInner">
                                <h3>Stay connected with us!</h3>
                                <h4>Get all the latest updates easily</h4>
                            </div>
                        </div>
                    </Col>
                    <Col className="p-0" xs={12} md={7}>
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
        padding: 30px 15px;
        height:100%;
        width:100%;
        background-color:rgb(26,71,148);
        .formRightInner {
            height:100%;
            display:grid;
            gap:5px;
            margin-inline:auto;
            width:fit-content;
            h3 {
                font-weight: 800;
            }
            h4 {
                font-size: 14px;
            }
        }
    }
    .formLeft {
        color:white;
        background-color: rgb(82,95,110);
        padding:30px 15px;
        height:100%;
        width:100%;
        .formLeftInner {
            font-size:18px;
            form {
                display:flex;
                flex-wrap: wrap;
                align-items: center;
                input {
                    width:min(300px, 90vw);
                    background-color:transparent;
                    border-color: rgba(255, 255, 255,0.8);
                    border-top:0;
                    margin: 10px;
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
                    margin-left: 15px;
                    flex-grow:0;
                    flex-basis: 0;
                    position:relative;
                    z-index:0;
                    &::after {
                        content:'';
                        position:absolute;
                        border-radius: 20px;
                        padding: 10px 30px;
                        z-index:-1;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background-color: #F27A21;
                        transform:scale(0);
                        transition:transform 500ms ease-in-out;
                    }
                    &:hover {
                        &::after {
                            transform:scale(1);
                        }
                    }
                }
            }
        }
    }
`;
