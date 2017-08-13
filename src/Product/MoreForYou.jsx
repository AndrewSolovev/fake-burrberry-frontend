import React from "react";
import styled from "styled-components";

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
  line-height: 1.125rem;
  color: #111111;
`;

const Link = styled.a`
  margin: 0;
  display: block;
  padding-top: 1rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  font-family: 'Lora', serif;
  line-height: 1rem;
  font-style: italic;
  font-weight: 400;
`;

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
