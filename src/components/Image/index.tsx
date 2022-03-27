import Image from 'next/image'

interface ImageProps {
  src: string
  width: number
  height: number
}

const ImageWrapper = ({ height, width, src }: ImageProps) => {
  return <Image height={height} width={width} src={src} />
}

export default ImageWrapper
