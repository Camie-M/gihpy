import styled from 'styled-components'

import { colors, spaces } from 'styles/global'

export const Button = styled.button`
  &.close {
    position: absolute;
    top: ${spaces.regular};
    right: ${spaces.regular};
  }

  &.delete {
    background-color: ${colors.red};
    margin-top: ${spaces.regular};

    &:hover {
      background-color: ${colors.darkRed};
    }
  }

  &.save {
    background-color: ${colors.green};
    margin-top: ${spaces.double};

    &:hover {
      background-color: ${colors.darkGreen};
    }
  }

  &.edit {
    background-color: ${colors.blue};
    margin-top: ${spaces.double};

    &:hover {
      background-color: ${colors.darkBlue};
    }
  }

  &.delete,
  &.save,
  &.edit {
    border-radius: ${spaces.half};
    color: ${colors.white};
    cursor: pointer;
    display: block;
    padding: ${spaces.half};

    //styles to take off once api is ready
    background-color: ${colors.grey};
    pointer-events: none;
    position: relative;

    &::after {
      color: ${colors.grey};
      font-size: 1rem;
      content: 'Funcionalidade em construção';
      left: 0;
      position: absolute;
      top: ${spaces.double};
      width: max-content;
    }
  }
`
