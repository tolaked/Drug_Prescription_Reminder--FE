import styled, { css } from "styled-components";

const Label = styled.label`
  font-size: ${props => props.fontSize || "0.3em"};
  color: ${props => props.color || "#000000"};
  font-weight: ${props => props.weight || 400};

  ${props =>
    props.medium &&
    css`
      font-size: 1rem;
    `}
`;

export default Label;
