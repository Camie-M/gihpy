import { useGifs } from '../../context/gifsContext'

import ImageWrapper from '../../components/Image'
import Button from '../../components/Button'
import Link from '../../components/Link'
import Title from '../../components/Title'

const CloseIcon = '/icons/cross.png'

import * as S from './styled'

const Modal = () => {
  const { currentGif, openModal, setOpenModal } = useGifs()

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    openModal && (
      <S.ModalWrapper>
        <S.ModalInfo>
          <ImageWrapper
            width={currentGif.images.downsized.width}
            height={currentGif.images.downsized.height}
            src={currentGif.images.downsized.url}
          />
          <Button active={false} click={closeModal}>
            <ImageWrapper width={32} height={32} src={CloseIcon} />
          </Button>
          <S.ModalName>
            <Title title={currentGif.title} />
            <Link
              href={currentGif.embed_url}
              title="Abrir gif em nova página"
            />
          </S.ModalName>
        </S.ModalInfo>
      </S.ModalWrapper>
    )
  )
}

export default Modal
