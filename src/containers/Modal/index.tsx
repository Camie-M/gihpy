import { useGifs } from '../../context/gifsContext'

import ImageWrapper from '../../components/Image'
import Button from '../../components/Button'

const Modal = () => {
  const { currentGif, openModal, setOpenModal } = useGifs()

  console.log(currentGif)

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    openModal && (
      <div>
        <ImageWrapper
          width={currentGif.images.downsized.width}
          height={currentGif.images.downsized.height}
          src={currentGif.images.downsized.url}
        />
        <Button active={false} title={'fechar'} click={closeModal} />
        <a href={currentGif.embed_url}>Abrir gif em nova página</a>
        <p>{currentGif.title}</p>
      </div>
    )
  )
}

export default Modal
