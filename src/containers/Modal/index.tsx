import { useGifs } from '../../context/gifsContext'

import ImageWrapper from '../../components/Image'
import Button from '../../components/Button'
import Link from '../../components/Link'
import Title from '../../components/Title'

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
          <Button active={false} title={'fechar'} click={closeModal} />
          <Link href={currentGif.embed_url} title="Abrir gif em nova página" />
          <Title title={currentGif.title} />
        </S.ModalInfo>
      </S.ModalWrapper>
    )
  )
}

export default Modal
