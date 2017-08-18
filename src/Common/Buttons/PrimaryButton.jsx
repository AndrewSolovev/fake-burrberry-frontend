import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 2px;
  font-family: 'Raleway', sans-serif;
  font-size: 0.75rem;
  line-height: 0.875rem;
  text-align: center;
  background-color: #171717;
  border: solid 1px #171717;
  color: #ffffff;
  flex-basis: 100%;
  cursor: pointer;

  ${props =>
    props.secondary &&
    css`
    background-color: inherit;
    border: solid 1px #171717;
    color: #171717;

  `};
`;
export default Button;
