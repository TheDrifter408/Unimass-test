'use client';

import styled from 'styled-components';
import { Img } from './Img';
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import MyButton from './MyButton';

const media = [
    {
        id:1,
        title:"Annual Business Plan for the year 2024",
        imageSrc: "/images/static/annualBusiness.avif",
        date:"October 1, 2024"
    },
    {
        id:2,
        title:"Committee Formation Evening",
        imageSrc:"/images/static/CommitteeFormation.avif",
        date:"February 21, 2024"
    },
    {
        id:3,
        title:"Family Day 2024",
        imageSrc:"/images/static/FamilyDay.avif",
        date:"January 5, 2024"
    }
]

function MediaCard({ imageSrc,title, date}){
    return(
        <div className="cardOuter">
            <div className="cardImage">
                <Img src={imageSrc} width="100%" height="100%" alt={title} top="0px" left="0px" position={"absolute"} />
            </div>
            <div className="cardDes">
                <h3>{title}</h3>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default function MediaCenter(){
    
    return(
        <StyledSection>
            <Container>
                <Row>
                    <Col>
                        <h1 className="mediaTitle">Media Center</h1>
                    </Col>
                </Row>
                <Row>
                    {
                        media.map((card) => (
                            <Col xs={12} md={4} key={card.id}>
                                <MediaCard {...card} />
                        
                            </Col>
                        ))
                    }
                </Row>
                <MyButton classNames="exploreBtn">
                    Explore News
                </MyButton>
            </Container>
        </StyledSection>
    );
}

const StyledSection = styled.section`
    padding-block: 60px;
    background-color: rgb(250,250,250);
    .exploreBtn {
        border: 1px solid black;
        border-radius: 20px;
        padding: 10px 30px;
        margin-block: 30px;
        display:block;
        position:relative;
        margin-inline:auto;
        background-color:transparent;
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
    .mediaTitle {
        margin-block: 50px;
        font-weight: 800;
    }
    
    .cardOuter {
        height:100%;
        margin-bottom: 30px;
        display:flex;
        flex-direction: column;
        overflow:hidden;
        background-color:rgb(255,255,255);
        .cardImage {
            position:relative;
            min-height:250px;
            min-width:360px;
            overflow:hidden;
        }
        .global-image {
            transform:scale(1);
            transition: transform 250ms ease-in-out;
        
        }
        .cardDes {
            display:flex;
            flex-direction: column;
            gap: 60px;
            padding: 10px;
            h3 {
                font-size:24px;
                font-weight: 500;
            }
        }
        &:hover {
            cursor:pointer;
            .global-image {
                transform:scale(1.1);
            }
        }
    }
`;
