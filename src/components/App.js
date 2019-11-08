import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 40%;
`;

const Title = styled.h1`
    color: black;
    font-size: 2.5rem;
    font-weight: 700;
`;

const Paragraph = styled.p`
    color: black;
    font-size: 1rem;
`;


const App = () => (
    <Container>
        <Wrapper>
            <Sidebar/>
            <Title>
                Practice Round
            </Title>
            <Paragraph>
                GFY
            </Paragraph>
        </Wrapper>
    </Container>
);

export default App;