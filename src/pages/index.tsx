import React, { useState } from 'react'

import { SearchContextManager } from '@giphy/react-components'

import { GifsContext } from '../context/gifsContext'

import GifsWrapper from '../containers/GifsWrapper'
import Modal from '../containers/Modal'

export default function Home() {
  const [currentGif, setCurrentGif] = useState({})
  const [openModal, setOpenModal] = useState(false)

  return (
    <SearchContextManager apiKey={'vjh7O3J8zzk6ZUOfaMmAX9WVyZeTVc3U'}>
      <GifsContext.Provider
        value={{ currentGif, setCurrentGif, openModal, setOpenModal }}
      >
        <Modal />
        <GifsWrapper />
      </GifsContext.Provider>
    </SearchContextManager>
  )
}
