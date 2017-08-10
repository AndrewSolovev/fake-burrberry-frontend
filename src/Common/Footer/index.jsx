import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: #f3f3f3;

  @media only screen and (min-width: 768px) {
    margin-top: 2rem;
    padding-top: 0;
    padding-bottom: 2rem;
  }
`

const Nav = styled.nav`
  display: none;
  padding-bottom: 0.25rem;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

const NavTitle = styled.h3`
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 0.75rem;
`

const NavLink = styled.a`
  display: block;
  padding-bottom: 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #999999;
`
const LocationButtons = styled.div`
@media only screen and (min-width: 768px) {
  display: flex;
}
`

const LocationButton = styled.button`
  display: block;
  padding: 1rem 0.5rem 0rem 0.5rem;
  border: none;
  font-size: 0.75rem;
  font-weight: 400;
  font-family: 'Raleway', sans-serif;
  line-height: 16px;
  color: #999999;
  background-color: #f3f3f3;

  @media only screen and (min-width: 768px) {
    margin-right: 1.5rem;
    margin-left: 0rem;
    padding-left: 0;
    padding-right: 0;
  }
`

const NeedHelp = styled.h2`
  margin: 0;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 1rem;
  line-height: 19px;
  color: #171717;
  font-weight: 700;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const Contact = styled.a`
  margin: 0;
  display: block;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  text-align: center;
  font-family: 'Lora', serif;
  font-style: italic;
  line-height: 17px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

export default () => {
  return (
    <Footer>
      <div className="container">
        <Nav>
          <div className="row">
            <div className="col-md-3">
              <NavTitle>CUSTOMER SERVICE</NavTitle>
                <NavLink>Contact Us</NavLink>
                <NavLink>Payment</NavLink>
                <NavLink>Payment</NavLink>
                <NavLink>Returns</NavLink>
                <NavLink>Faqs</NavLink>
                <NavLink>Live Chat</NavLink>
                <NavLink>The Burberry App</NavLink>
                <NavLink>Store Locator</NavLink>
            </div>
            <div className="col-md-3">
              <NavTitle>OUR COMPANY</NavTitle>
                <NavLink>Our History</NavLink>
                <NavLink>Burberry Group Plc</NavLink>
                <NavLink>Careers</NavLink>
                <NavLink>Corporate Responsibility</NavLink>
                <NavLink>Site Map</NavLink>
            </div>
            <div className="col-md-3">
              <NavTitle>LEGAL & COOKIES</NavTitle>
                <NavLink>Terms & Conditions</NavLink>
                <NavLink>Privacy Policy</NavLink>
                <NavLink>Cookie Policy</NavLink>
                <NavLink>Accessibility Statement</NavLink>
                <NavLink>Japan Only - SCTL indications</NavLink>
            </div>
          </div>
        </Nav>
        <LocationButtons>
          <LocationButton type="button">Shipping country: RussiaFederation</LocationButton>
          <LocationButton type="button">Language: English</LocationButton>
        </LocationButtons>
        <NeedHelp>Need help?</NeedHelp>
        <Contact>Find out more and contact us</Contact>
      </div>
    </Footer>
  );
};
