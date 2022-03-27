import styled from 'styled-components'

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
  border-radius: 1rem;
  padding: 2rem;
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
    top: 2rem;
    right: 2rem;
  }
`
