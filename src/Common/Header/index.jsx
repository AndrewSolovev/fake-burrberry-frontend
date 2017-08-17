import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

import breakpoints from '../../breakpoints';
import Hamburger from './hamburger.svg';
import Logo from '../Logo/';
import arrowImg from '../../Pics/arrow.svg';

const Header = styled.header`
  padding: 1rem 0rem;

  @media only screen and (min-width: 48rem) {
    padding: 1.5rem 0rem;
  }
  @media only screen and (min-width: 62rem) {
    padding: 2rem 0rem;
  }
`;
const LogoLink = styled.a`
  display: block;
  text-align: center;
`;
const Ham = styled.button`
  position: absolute;
  display: block;
  margin-left: 0.5rem;
  padding: 5px 8px;
  background-image: url(${Hamburger});
  background-size: cover;
  border: none;
  background-color: #ffffff;
`;

const Shopping = styled.button`
  display: block;
  margin: 0;
  padding: 0;
  padding-left: 0.5rem;
  border: none;
  font-size: 0.75rem;
  line-height: 1.25rem;
  background-color: #ffffff;
  color: #999999;
  font-weight: 400;

  &:after {
    content: "";
    display: inline-block;
    background-image: url(${arrowImg});
    background-size: cover;
    width: 12px;
    height: 6px;
    margin-left: 0.5rem;
    flex-shrink: 0;
  }
`;
const Nav = styled.nav`text-align: center;`;

const NavLink = styled.a`
  display: inline-block;
  padding: 1rem;
  border-bottom: 1px solid #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999999;
  cursor: pointer;

  &:hover {
    color: #171717;
    border-bottom: 1px solid #171717;
  }
`;

export default () =>
  (<Header>
    <div>
      <MediaQuery maxDeviceWidth={breakpoints.sm - 1}>
        <Ham />
      </MediaQuery>
      <MediaQuery minDeviceWidth={breakpoints.sm}>
        <Shopping>Shopping in: United Kingdom (£)</Shopping>
      </MediaQuery>
      <LogoLink>
        <Logo />
      </LogoLink>
    </div>
    <MediaQuery minDeviceWidth={breakpoints.sm}>
      <Nav>
        <NavLink>WOMEN</NavLink>
        <NavLink>MEN</NavLink>
        <NavLink>CHILDREN</NavLink>
        <NavLink>BEAUTY</NavLink>
        <NavLink>EXPERIENCE</NavLink>
      </Nav>
    </MediaQuery>
  </Header>);
