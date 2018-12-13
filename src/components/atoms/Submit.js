import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: inline-block;
    width:75px;
    height: 28px;
    padding: 4px 8px;
    box-sizing: border-box;
    background: #3366CC;
    border-radius: 5px;
    cursor:pointer;
    margin-left: 160px;
    margin-top: 10px;
`;

const Submit = ({
    onClick,
    name
}) => (
    <Button onClick={onClick}>{name}</Button>
);

export default Submit;