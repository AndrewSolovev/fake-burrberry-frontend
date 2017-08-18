import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import breakpoints from '../../breakpoints';

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f3f3f3;

  @media only screen and (min-width: 48rem) {
    margin-top: 2rem;
    padding-top: 0;
    padding-bottom: 2rem;
  }
`;

const Nav = styled.nav`
  display: none;
  padding-bottom: 0.25rem;

  @media only screen and (min-width: 48rem) {
    display: block;
  }
`;

const Title = styled.h3`
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 0.75rem;
  @media only screen and (min-width: 62rem) {
    padding-top: 4rem;
  }
`;

const Link = styled.a`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #999999;
  cursor: pointer;
`;
const LocationButtons = styled.div`@media only screen and (min-width: 48rem) {display: flex;}`;

const LocationButton = styled.button`
  display: block;
  padding: 0;
  margin-top: 1rem;
  border: none;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  color: #999999;
  background-color: #f3f3f3;
  cursor: pointer;

  @media only screen and (min-width: 48rem) {
    margin-right: 1.5rem;
    margin-left: 0rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

const NeedHelp = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.125rem;
  color: #171717;
  font-weight: 700;
  cursor: pointer;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;

const Contact = styled.a`
  margin: 0;
  display: block;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
  font-family: 'Lora', serif;
  font-style: italic;
  line-height: 1rem;

  @media only screen and (min-width: 48rem) {
    display: none;
  }
`;
const Pic = styled.img`
  margin-top: 4rem;
  display: block;
  height: 154px;
  width: auto;
`;
const FindStore = styled.a`
  display: block;
  margin-top: 1rem;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  text-decoration: underline;
  cursor: pointer;
`;

export default () =>
  (<Footer>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Nav>
            <Title>CUSTOMER SERVICE</Title>
            <Link>Contact Us</Link>
            <Link>Payment</Link>
            <Link>Payment</Link>
            <Link>Returns</Link>
            <Link>Faqs</Link>
            <Link>Live Chat</Link>
            <Link>The Burberry App</Link>
            <Link>Store Locator</Link>
          </Nav>
        </div>
        <div className="col-md-3">
          <Nav>
            <Title>OUR COMPANY</Title>
            <Link>Our History</Link>
            <Link>Burberry Group Plc</Link>
            <Link>Careers</Link>
            <Link>Corporate Responsibility</Link>
            <Link>Site Map</Link>
          </Nav>
        </div>
        <div className="col-md-3">
          <Nav>
            <Title>LEGAL & COOKIES</Title>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
            <Link>Accessibility Statement</Link>
            <Link>Japan Only - SCTL indications</Link>
          </Nav>
        </div>
        <MediaQuery minDeviceWidth={breakpoints.md}>
          <div className="col-md-3">
            <Pic src="/shopimage.jpg" alt="shop" />
            <FindStore>Find a Store</FindStore>
          </div>
        </MediaQuery>
      </div>
      <LocationButtons>
        <LocationButton type="button">
          Shipping country: <b>Russian Federation</b>
        </LocationButton>
        <LocationButton type="button">
          Language: <b>English</b>
        </LocationButton>
      </LocationButtons>
      <NeedHelp>Need help?</NeedHelp>
      <Contact>Find out more and contact us</Contact>
    </div>
  </Footer>);
