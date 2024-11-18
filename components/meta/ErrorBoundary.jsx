import React from 'react';
import styled from "styled-components";
import {white} from "@/styles/globalStyleVars";
import {Button, Col, Container, Row} from "react-bootstrap";
import {Img} from "@/components/Img";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI

        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        // You can use your own error logging service here
    }

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <StyledErrorPage className='StyledErrorPage'>
                    <Img alt={'Error Page'} src={"/images/static/404.png"}/>
                    <Container>
                        <Row>
                            <Col sm={{span: 12}} className={'d-flex align-items-center justify-content-center flex-column'}>
                                <h2>Oops, there is an error!</h2>

                                <Button margin={'40px 0 0 0'} marginSm={"30px 0 0 0"} src={"javascript:void(0)"}   onClick={() => {
                                    this.setState({hasError: false})
                                    window.location.reload();
                                }} text=" Try again?"/>

                            </Col>
                        </Row>
                    </Container>
                </StyledErrorPage>
            )
        }

        // Return children components in case of no error

        return this.props.children
    }
}

const StyledErrorPage = styled.div`
    background: #e9e9e9;
    position: relative;
    padding: 225px 0;
    min-height: ${`100svh`};
    overflow: hidden;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        color: ${white};
        margin-bottom: 40px;
    }

    p {
        color: ${white};
    }


    @media (max-width: 991px) {
        .col-sm-8 {
            min-width: 100%;
            margin: 0;
        }
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 80px;
            line-height: 80px;
        }
    }
`;

export default ErrorBoundary