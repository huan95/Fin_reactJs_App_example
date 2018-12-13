import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
      color: black;
      text-align: center;
      margin-top: 13px;
      font-style: oblique;
       font-family: "Comic Sans MS", cursive, sans-serif;
`;
const Label = styled.label`
      color:red;
`;

const Names = ({
                   names,
                   content
               }) => (<Wrapper>
                        <Label>{content}</Label>
                        {names}
                      </Wrapper>);

export default Names;