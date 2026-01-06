import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const CustomLink = styled(Link)`
  &:not(.normal) {
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 1.5px;
      left: 0;
      bottom: -1px;
      background: #26262A;
      transition: all 0.3s ease;
    }

    &:hover::after,
    &:active::after,
    &.active::after {
      width: 100%;
    }
  }
`;

export const ExternalLink = styled.a`
  &:not(.normal) {
    &.text:after {
      content: "";
      position: absolute;
      width: 0;
      height: 1.5px;
      left: 0;
      bottom: -1px;
      background: #26262A;
      transition: all 0.3s ease;
    }

    &.text:hover::after,
    &.text:active::after,
    &.text.active::after {
      width: 100%;
    }

    &.icon {
      img {
        transform: scale(1);
        transition: all 0.3s;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
`;
