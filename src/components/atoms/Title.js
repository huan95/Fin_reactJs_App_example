import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
       boder-bottom: 1px solid #00FF00; 
       text-align: center;
       font-size: 50px;
       font-weight: 300;
       color: black;
       font-style: oblique;
       font-family: "Comic Sans MS", cursive, sans-serif;
`;

const Title = ({
    title
}) => (
    <Wrapper>{title}</Wrapper>
);

export default Title;
