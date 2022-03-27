interface LinkProps {
  href: string
  title: string
}

const Link = ({ href, title }: LinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  )
}

export default Link
