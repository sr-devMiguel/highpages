import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const classes = {
  base: 'inline-flex items-center justify-center rounded-md font-semibold transition',
  primary: 'bg-black text-white hover:opacity-90',
  secondary: 'border border-black text-black bg-white hover:bg-gray-100',
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, ...rest }) => {
  const cls = [
    classes.base,
    variant === 'primary' ? classes.primary : classes.secondary,
    size === 'sm' ? classes.sm : size === 'lg' ? classes.lg : classes.md,
  ].join(' ')
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
export default Button
