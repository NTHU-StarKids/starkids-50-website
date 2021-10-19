import { ReactChild } from 'react'
import classNames from 'classnames'

type TProps = {
  children: ReactChild | ReactChild[]
  className?: string
}

const Container = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 xl:grid-cols-12 gap-4',
        className
      )}
    >
      <div className="xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-8">
        {children}
      </div>
    </div>
  )
}

export default Container
