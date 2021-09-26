import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  color?: 'default' | 'white' | 'purple'
}

const Section = ({ children, color = 'default' }: Props): JSX.Element => {
  let colorClass = ''
  switch (color) {
    case 'white':
      colorClass = 'bg-white text-black'
      break
    case 'purple':
      colorClass = 'bg-purple text-white'
      break
    default:
      colorClass = 'bg-gray-700 text-white'
      break
  }

  return (
    <div className={colorClass}>
      <div className="container px-8 py-12 text-center">{children}</div>
    </div>
  )
}

export default Section
