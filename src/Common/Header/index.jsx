import React from "react";
import Logo from "../Logo/";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #c6c6c6;
`;

const Link = styled.a`
  display: inline-block;
  padding: 1rem 0rem;

  @media only screen and (min-width: 48rem) {
    padding: 1.5rem 0rem;
  }
  @media only screen and (min-width: 62rem) {
    padding: 2rem 0rem;
  }
`;

export default () => {
  return (
    <Header>
      <Link>
        <Logo />
      </Link>
    </Header>
  );
};
