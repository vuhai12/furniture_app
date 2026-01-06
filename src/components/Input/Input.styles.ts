import { styled } from "styled-components";

export const MainWrapper = styled.input`
  border: 1.5px solid #26262a33;

  &::placeholder {
    color: #26262a80;
  }

  &::-webkit-input-placeholder {
    color: #26262a80;
  }

  &::-moz-placeholder {
    color: #26262a80;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #26262a80;
  }

  &::-ms-input-placeholder {
    color: #26262a80;
  }
`;
