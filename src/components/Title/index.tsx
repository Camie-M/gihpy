import * as S from './styled'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return <S.TitleWrapper>{title}</S.TitleWrapper>
}

export default Title
