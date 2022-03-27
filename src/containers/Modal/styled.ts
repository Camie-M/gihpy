import styled from 'styled-components'

export const ModalWrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 5;
`

export const ModalInfo = styled.div`
  animation: crescendo 0.5s alternate forwards ease-in;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  width: fit-content;
  @keyframes crescendo {
    0% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1);
    }
  }
`
