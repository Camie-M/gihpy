import { SearchContextManager } from '@giphy/react-components'

import GifsWrapper from '../containers/GifsWrapper'

export default function Home() {
  return (
    <SearchContextManager apiKey={'vjh7O3J8zzk6ZUOfaMmAX9WVyZeTVc3U'}>
      <GifsWrapper />
    </SearchContextManager>
  )
}
