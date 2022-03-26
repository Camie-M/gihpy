import React, { useContext } from 'react'

import { SearchBar, SearchContext } from '@giphy/react-components'
import GifsGrid from '../../components/GifsGrid'

const GifsWrapper = () => {
  const { fetchGifs, term, channelSearch, activeChannel } =
    useContext(SearchContext)

  return (
    <main>
      <SearchBar />
      <GifsGrid
        key={`${channelSearch} ${term} ${activeChannel?.user.username}`}
        columns={4}
        width={600}
        fetchGifs={fetchGifs}
      />
    </main>
  )
}

export default GifsWrapper
