import { ReactChild } from 'react'
import classNames from 'classnames'

type TProps = {
  children: ReactChild | ReactChild[]
  className?: string
}

const P = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <p className={classNames(className, 'font-light tracking-wider')}>
      {children}
    </p>
  )
}

export default P
