import { Grid } from '@giphy/react-components'

interface GifsWrapperProps {
  gifs: any
  fetchGifs: any
}

const GifsWrapper = ({ gifs, fetchGifs }: GifsWrapperProps) => {
  return (
    <Grid initialGifs={gifs} width={600} columns={3} fetchGifs={fetchGifs} />
  )
}

export default GifsWrapper
