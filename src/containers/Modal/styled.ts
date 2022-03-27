import styled from 'styled-components'

import { spaces } from 'styles/global'

export const ModalWrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 1;
`

export const ModalInfo = styled.div`
  animation: crescendo 0.5s alternate forwards ease-in;
  background-color: white;
  border-radius: ${spaces.half};
  display: flex;
  padding: ${spaces.regular};
  position: relative;
  width: fit-content;

  @keyframes crescendo {
    0% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1);
    }
  }

  button {
    position: absolute;
    top: ${spaces.regular};
    right: ${spaces.regular};
  }
`

export const ModalName = styled.div`
  margin: ${spaces.double} ${spaces.regular};
`
