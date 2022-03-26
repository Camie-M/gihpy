/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react'

export type Gifs = {
  currentGit: any
  setCurrentGif: (value: any) => void
}

export const GifsContext = createContext<Gifs>({
  currentGit: {},
  setCurrentGif: (gifs) => gifs
})

export const useGifs = () => useContext(GifsContext)
