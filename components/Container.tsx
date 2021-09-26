import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  color?: 'default' | 'white' | 'purple'
}

const Container = ({ children, color = 'default' }: Props): JSX.Element => {
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
    <div className={`container px-8 text-center ${colorClass}`}>{children}</div>
  )
}

export default Container
