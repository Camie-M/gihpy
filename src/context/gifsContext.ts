/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react'

export type Gifs = {
  currentGif: any
  setCurrentGif: (value: any) => void
  openModal: boolean
  setOpenModal: (value: boolean) => void
}

export const GifsContext = createContext<Gifs>({
  currentGif: {},
  setCurrentGif: (gifs) => gifs,
  openModal: false,
  setOpenModal: (value) => value
})

export const useGifs = () => useContext(GifsContext)
