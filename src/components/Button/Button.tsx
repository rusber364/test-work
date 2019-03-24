import React from 'react'
import css from './Button.module.css'

interface IProps {
  onClick?(e: React.MouseEvent<HTMLElement>): void
}

const Button: React.FC<IProps> = (props) => {
  const { children, ...rest } = props
  return (
    <button className={css.main} {...rest}>
      {children}
    </button>
  )
}

export default Button
