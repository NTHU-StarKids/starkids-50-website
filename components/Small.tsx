import { ReactChild } from 'react'
import classNames from 'classnames'

type TProps = {
  children: ReactChild | ReactChild[]
  className?: string
}

const Small = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <p
      className={classNames(
        className,
        'font-extralight tracking-wider text-xs sm:text-sm leading-6'
      )}
    >
      {children}
    </p>
  )
}

export default Small
