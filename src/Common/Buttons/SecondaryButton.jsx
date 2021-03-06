import styled from 'styled-components';

const SecondaryButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  border: solid 1px #171717;
  background-color: inherit;
  font-size: 0.75rem;
  line-height: 1rem;
  cursor: pointer;
  ${props =>
    props.pressed &&
    `
    font-weight: 700;
`};
`;

export default SecondaryButton;
