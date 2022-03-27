interface ButtonProps {
  active: boolean
  children: React.ReactNode
  click: () => void
}

const Button = ({ active = true, children, click }: ButtonProps) => {
  return (
    <button className={active && 'true'} onClick={click}>
      {children}
    </button>
  )
}

export default Button
