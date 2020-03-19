import styled, { css } from 'styled-components';

const Input = styled.input`
  background: #F1EDED;
  border: 0.5px solid #716969;
  outline: none;
  padding: 0 .5rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 5px;
  ${props => props.small
    && css`
      width: 17.5rem;
      height:2rem;
    `}
  ${props => props.medium
    && css`
      width: 16.5rem;
      border-radius: 5px;
    `}
  ${props => props.large
    && css`
      width: 20rem;
    `}
  ${props => props.xLarge
  && css`
    width: 25rem;
    border-radius: 5px;
  `}
  ${props => props.xxLarge
  && css`
    width: 40rem;
    background:none;
    border-radius: 5px;
  `}
  ${props => props.disabled
    && css`
      background: #dddddd;
      cursor: not-allowed;
    `}
    ${props => props.noBackground
    && css`
      background: none;
    `}
`;

export default Input;