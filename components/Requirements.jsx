'use client';

import styled from 'styled-components';
import { Img } from './Img';
import { Col, Container, Row } from 'react-bootstrap';
import MyButton from './MyButton';

export default function Requirements(){
    
    return (
        <StyledSection>
            <Img src="/images/static/requirements.avif" top="0px" left="0px" width="100%" height="100%" />
            <Container className="position-relative h-100">
                <Row>
                    <Col xs={12} md={6}>
                        <div className="requirementsWrapper">
                            <div className="requirements">
                                <h1>Want to sell or rent out your property?</h1>
                                <p>Our professional team can help you out. Post your property details now.</p>
                                <MyButton classNames="requirementsBtn">
                                    Drop Your Requirements
                                </MyButton>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    height:100vh;
    position:relative;
    margin-block: 20px;
    .requirementsWrapper {
        position:absolute;
        transform:translateY(100%);
        left:0;
        margin-inline:20px;
    }
    .requirements {
        background-color:rgb(0,94,158);
        padding: 50px;
        color:white;
        h1 {
            margin-bottom: 20px;
            font-size:24px;
            font-weight: 800;
        }
        p {
            font-size:16px;
            margin-bottom: 20px;
        }
        .requirementsBtn {
            border:1px solid white;
            padding: 10px 20px;
            border-radius: 30px;
            color:white;
            position:relative;
            background-color: transparent;
            overflow:hidden;
            &::after {
                content:'';
                position:absolute;
                transform:scale(0);
                border-radius: 30px;    
                transition: transform 500ms ease-in-out;
                top:0;
                left:0;
                z-index:-1;
                background-color:rgb(242, 122, 33);
                height:100%;
                width:100%;
            }
            &:hover {
                &::after {
                    transform:scale(1);
                }
            }
        }
    }
`;
