import { GiphyFetch } from '@giphy/js-fetch-api'
import 'isomorphic-fetch'

import axios, { AxiosResponse } from 'axios'

import { GifData } from 'types/types'

export const giphyFetch = new GiphyFetch('vjh7O3J8zzk6ZUOfaMmAX9WVyZeTVc3U')

const instance = axios.create({
  baseURL: 'https://mockURL.com/'
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: GifData) =>
    instance.post(url, body).then(responseBody),
  put: (url: string, body: GifData) =>
    instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody)
}

export const SaveGif = {
  postGif: (gifData: GifData) => requests.post('/save', gifData)
}

export const DeleteGif = {
  deleteGif: (id: string) => requests.delete(`delete/${id}`)
}

export const EditGif = {
  editGif: (id: string, gifData: GifData) => requests.put(`edit/${id}`, gifData)
}
