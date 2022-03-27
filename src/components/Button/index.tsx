interface ButtonProps {
  active: boolean
  title: string
  click: () => void
}

const Button = ({ active = true, title, click }: ButtonProps) => {
  return (
    <button className={active && 'true'} onClick={click}>
      {title}
    </button>
  )
}

export default Button
