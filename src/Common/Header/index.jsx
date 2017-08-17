import React from 'react';
import styled from 'styled-components';
import Hamburger from './hamburger.svg';
import Logo from '../Logo/';

const Header = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #c6c6c6;
`;

const Link = styled.a`
  flex: 85%;
  padding: 1rem 0rem;

  @media only screen and (min-width: 48rem) {
    padding: 1.5rem 0rem;
  }
  @media only screen and (min-width: 62rem) {
    padding: 2rem 0rem;
  }
`;
const Ham = styled.button`
  display: block;
  margin-left: 0.5rem;
  padding: 5px 8px;
  background-image: url(${Hamburger});
  background-size: cover;
  border: none;
  background-color: #ffffff;
`;

export default () =>
  (<Header>
    <Ham />
    <Link>
      <Logo />
    </Link>
  </Header>);
