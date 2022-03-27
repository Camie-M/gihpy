import { useGifs } from '../../context/gifsContext'

import { DeleteGif, EditGif, SaveGif } from '../../pages/api/hello'

import ImageWrapper from '../../components/Image'
import Button from '../../components/Button'
import Link from '../../components/Link'
import Title from '../../components/Title'

const CloseIcon = '/icons/close.png'

import * as S from './styled'

const Modal = () => {
  const { currentGif, openModal, setOpenModal } = useGifs()

  const closeModal = () => {
    setOpenModal(false)
  }

  const deleteGif = (id: string) => {
    DeleteGif.deleteGif(id)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const saveGif = (id: string, title: string, url: string) => {
    const body = {
      id,
      title,
      url
    }

    SaveGif.postGif(body)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const editGif = (id, title, url) => {
    const body = {
      id,
      title,
      url
    }

    EditGif.editGif(id, body)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
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
          <Button click={closeModal} type="close">
            <ImageWrapper width={32} height={32} src={CloseIcon} />
          </Button>
          <S.ModalName>
            <Title title={currentGif.title} />
            <Link
              href={currentGif.embed_url}
              title="Abrir gif em nova página"
            />
            <Button type="delete" click={() => deleteGif(currentGif.id)}>
              Deletar
            </Button>
            <Button
              type="save"
              click={() =>
                saveGif(currentGif.id, currentGif.title, currentGif.url)
              }
            >
              Salvar
            </Button>
            <Button
              type="edit"
              click={() =>
                saveGif(currentGif.id, currentGif.title, currentGif.url)
              }
            >
              Editar
            </Button>
          </S.ModalName>
        </S.ModalInfo>
      </S.ModalWrapper>
    )
  )
}

export default Modal
