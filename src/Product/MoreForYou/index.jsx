import React from 'react';
import styled from 'styled-components';


const Title = styled.h2`
  margin: 0;
  display: inline-block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  margin-left: 0.5rem;
  border-bottom: 1px solid #111111;
  font-size: 1rem;
  font-weight: 500;
  line-height: 19px;
  color: #111111;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`

const Link = styled.a`
  margin: 0;
  display: block;
  padding-top: 1rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  font-family: 'Lora', serif;
  line-height: 17px;
  font-style: italic;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`


export default () => {
  return (
    <section className="container">
      <Title>MORE FOR YOU</Title>
      <Link>Men's Black Trench Coats</Link>
      <Link>Men's Short Trench Coats</Link>
      <Link>Men's Long Trench Coats</Link>
    </section>
  );
};
