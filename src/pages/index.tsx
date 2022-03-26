import GifsWrapper from '../components/GifsWrapper'

import { fetchGifs } from './api/hello'

export const getServerSideProps = async () => {
  const { data } = await fetchGifs(0)
  return {
    props: {
      gifs: data
    }
  }
}
export default function Home({ gifs }) {
  return gifs ? <GifsWrapper gifs={gifs} fetchGifs={fetchGifs} /> : null
}
