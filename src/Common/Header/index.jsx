import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';

import breakpoints from '../../breakpoints';
import Hamburger from '../../icons/hamburger.svg';
import Logo from '../Logo/';
import ShoppingIn from './ShoppingIn';

const Header = styled.header`
  margin: 1.125rem 0rem;

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
      <MediaQuery maxWidth={breakpoints.sm - 1}>
        <Ham />
      </MediaQuery>
      <MediaQuery minWidth={breakpoints.sm}>
        <ShoppingIn
          locations={['United Kingdom (£)', 'United States ($)', 'Russian Federation (₽)']}
        />
      </MediaQuery>
      <LogoLink>
        <Logo />
      </LogoLink>
    </div>
    <MediaQuery maxWidth={breakpoints.sm} />
    <MediaQuery minWidth={breakpoints.sm}>
      <Nav>
        <Link to="/women/">WOMEN</Link>
        <Link to="/men/">MEN</Link>
        <Link to="/children/">CHILDREN</Link>
        <Link to="/beauty/">BEAUTY</Link>
        <Link to="/experience/">EXPERIENCE</Link>
      </Nav>
    </MediaQuery>
  </Header>);
