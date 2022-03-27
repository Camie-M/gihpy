import React, { useContext } from 'react'

import useResponsive from '../../hooks/useResponsive'

import { SearchBar, SearchContext } from '@giphy/react-components'
import GifsGrid from '../../components/GifsGrid'

import * as S from './styled'

const GifsWrapper = () => {
  const { fetchGifs, term, channelSearch, activeChannel } =
    useContext(SearchContext)

  const isMobile = useResponsive('(max-width: 48rem)')

  return (
    <S.GifsContainer>
      <SearchBar />
      <GifsGrid
        key={`${channelSearch} ${term} ${activeChannel?.user.username}`}
        columns={isMobile ? 2 : 5}
        width={isMobile ? 600 : 900}
        fetchGifs={fetchGifs}
      />
    </S.GifsContainer>
  )
}

export default GifsWrapper
