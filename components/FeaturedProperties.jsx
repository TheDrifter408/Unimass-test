'use client';

import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { Swiper,SwiperSlide } from 'swiper/react';
import MyButton from './MyButton';

const sliders = [
    {
        id:1,
        title:"West & street (Beside Central Road, Dhanmondi)",
        imgSrc: "/images/static/Masum-Orchid-1.jpg"
    },
    {
        id:2,
        title:"Uttara Extension",
        imgSrc: "/images/static/Rakin-City-1.jpg"
    },
    {
        id:3,
        title:"Bashundhara R/A (Block C)",
        imgSrc: "/images/static/DLVD-1.jpg"
    },
    {
        id:4,
        title:"Lalmatia (Block A)",
        imgSrc: "/images/static/Criterion-Zen-1.jpg"
    },
]

export default function FeaturedProperties(){
    return(
        <StyledSection>
            <Container>
                <div>
                    <h1>Featured Properties</h1>
                    <div>
                        <MyButton></MyButton>
                        <MyButton></MyButton>
                    </div>
                </div>
                <Swiper>
                    {
                        sliders.map((slider) => (
                            <SwiperSlide key={slider.id}>
                                <Img src={slider.imgSrc} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    background-color:white;   
`