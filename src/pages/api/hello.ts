import { GiphyFetch } from '@giphy/js-fetch-api'
import 'isomorphic-fetch'

const apiKey = process.env.NEXT_PUPLIC_GIPHY

const giphyFetch = new GiphyFetch(apiKey)

export const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 10 })
