import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: ${({ theme }) => theme.text};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>Meu Tema</Title>
    </HeaderWrapper>
  );
};

export default Header;
