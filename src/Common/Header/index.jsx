import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';

import breakpoints from '../../breakpoints';
import Hamburger from '../../icons/hamburger.svg';
import Logo from '../Logo/';
import arrowImg from '../../icons/arrow.svg';

const Header = styled.header`
  margin: 1rem 0rem;

  @media only screen and (min-width: 48rem) {
    margin: 1.5rem 0rem 0rem 0rem;
  }
  @media only screen and (min-width: 62rem) {
    margin: 2rem 0rem 0rem 0rem;
  }
`;
const LogoLink = styled.a`cursor: pointer;`;
const Ham = styled.button`
  position: absolute;
  display: block;
  padding: 5px 8px;
  background-image: url(${Hamburger});
  background-size: cover;
  border: none;
  background-color: #ffffff;
`;

const Shopping = styled.button`
  position: absolute;
  padding: 0;
  border: none;
  font-family: Raleway;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #999999;
  font-weight: 400;
  cursor: pointer;

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
const Nav = styled.nav`
  text-align: center;
  @media only screen and (min-width: 48rem) {
    margin-top: 1.5rem;
  }
  @media only screen and (min-width: 62rem) {
    margin-top: 2rem;
  }
`;

const Link = styled(NavLink)`
  display: inline-block;
  padding: 1rem;
  border-bottom: 1px solid #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  letter-spacing: 1.5px;
  color: #999999;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: #171717;
    border-bottom: 1px solid #171717;
  }

`;

export default () =>
  (<Header>
    <div className="container">
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
        <Link to="/products/women/">WOMEN</Link>
        <Link to="/products/men/">MEN</Link>
        <Link to="/products/children/">CHILDREN</Link>
        <Link to="/products/beauty/">BEAUTY</Link>
        <Link to="/products/experience/">EXPERIENCE</Link>
      </Nav>
    </MediaQuery>
  </Header>);
