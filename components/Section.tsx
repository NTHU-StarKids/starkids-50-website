import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  color?: 'default' | 'white' | 'purple-700' | 'purple-100'
}

const Section = ({ children, color = 'default' }: Props): JSX.Element => {
  let colorClass = ''
  switch (color) {
    case 'white':
      colorClass = 'bg-white text-black'
      break
    case 'purple-700':
      colorClass = 'bg-purple text-white'
      break
    case 'purple-100':
      colorClass = 'bg-purple-100 text-black'
      break
    default:
      colorClass = 'bg-gray-700 text-white'
      break
  }

  return (
    <div className={`z-10 ${colorClass}`}>
      <div className="container px-8 py-12 text-center">{children}</div>
    </div>
  )
}

export default Section
