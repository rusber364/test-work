import React from 'react'
import css from './Button.module.css'

type IOwnProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type IProps = IOwnProps

const Button: React.FC<IProps> = (props) => {
  const { children, ...rest } = props
  return (
    <button className={css.main} {...rest}>
      {children}
    </button>
  )
}

export default Button
