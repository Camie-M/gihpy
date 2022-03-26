import { Grid } from '@giphy/react-components'

import { giphyFetch } from '../../pages/api/hello'

interface GifsWrapperProps {
  columns: number
  width: number
  fetchGifs: any
}

const GifsGrid = ({ columns, width, fetchGifs }: GifsWrapperProps) => {
  const getGifById = async (id) => {
    const { data } = await giphyFetch.gif(id)
    console.log(data)
  }

  return (
    <Grid
      columns={columns}
      width={width}
      fetchGifs={fetchGifs}
      noLink={true}
      onGifClick={(gif) => getGifById(gif.id)}
    />
  )
}

export default GifsGrid
