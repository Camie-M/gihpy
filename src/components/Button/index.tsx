import * as S from './styled'

interface ButtonProps {
  type?: string
  children: React.ReactNode
  click: () => void
}

const Button = ({ type, children, click }: ButtonProps) => {
  return (
    <S.Button className={type && `${type}`} onClick={click}>
      {children}
    </S.Button>
  )
}

export default Button
